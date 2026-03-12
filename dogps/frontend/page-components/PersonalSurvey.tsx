"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import DogCard from "../components/dog-card";
import DogModal from "../components/DogModal";
import "./personal-survey.css";

const API_BASE = "http://localhost:3001";

// ── Types ──────────────────────────────────────────────────────────────────
// All fields stored as strings internally in React state.
// Boolean DB fields (has_kids, has_dogs, has_cats) are kept as "Yes" | "No" | "Prefer not to say"
// and only converted to booleans/null right before sending to the API.
interface SurveyAnswers {
  living_situation?: string;
  activity_level?: string;
  has_kids?: string;
  has_dogs?: string;
  has_cats?: string;
  housing_type?: string;
  dog_size?: string;
  dog_age?: string;
  dog_breed?: string;
}

// ── Survey Question Definitions ────────────────────────────────────────────
const QUESTIONS = [
  {
    id: "living_situation",
    question: "What is your living situation?",
    type: "radio",
    options: ["Own", "Rent", "With family", "Not sure"],
    required: true,
  },
  {
    id: "activity_level",
    question: "How would you describe your activity level?",
    type: "radio",
    options: ["Low — mostly indoors", "Moderate — daily walks", "High — very active", "Not sure"],
    required: true,
  },
  {
    id: "has_kids",
    question: "Do you have children at home?",
    type: "radio",
    options: ["Yes", "No", "Prefer not to say"],
    required: true,
  },
  {
    id: "has_dogs",
    question: "Do you currently have other dogs?",
    type: "radio",
    options: ["Yes", "No", "Prefer not to say"],
    required: true,
  },
  {
    id: "has_cats",
    question: "Do you currently have cats?",
    type: "radio",
    options: ["Yes", "No", "Prefer not to say"],
    required: true,
  },
  {
    id: "housing_type",
    question: "What type of housing do you have?",
    type: "radio",
    options: ["House with yard", "House without yard", "Apartment", "Condo", "Not sure"],
    required: true,
  },
  {
    id: "dog_size",
    question: "What size dog are you looking for?",
    type: "radio",
    options: ["Small", "Medium", "Large", "No preference"],
    required: true,
  },
  {
    id: "dog_age",
    question: "What age dog are you looking for?",
    type: "radio",
    options: ["Puppy", "Young", "Adult", "Senior", "No preference"],
    required: true,
  },
  {
    id: "dog_breed",
    question: "Any breed preference?",
    type: "text",
    placeholder: "e.g. Labrador, Golden Retriever… or leave blank for no preference",
    required: false,
  },
];

// ── Utility ────────────────────────────────────────────────────────────────
const SUMMARY_LABELS: Record<string, string> = {
  living_situation: "Living situation",
  activity_level:   "Activity level",
  has_kids:         "Children at home",
  has_dogs:         "Other dogs",
  has_cats:         "Cats",
  housing_type:     "Housing type",
  dog_size:         "Preferred size",
  dog_age:          "Preferred age",
  dog_breed:        "Breed preference",
};

// Convert DB boolean back to a display string for the radio buttons
function dbBoolToString(val: boolean | null | undefined): string {
  if (val === true)  return "Yes";
  if (val === false) return "No";
  return "Prefer not to say";
}

// Normalise answers coming back from the DB so boolean fields become strings
function normaliseAnswers(raw: any): SurveyAnswers {
  return {
    living_situation: raw.living_situation ?? "",
    activity_level:   raw.activity_level   ?? "",
    has_kids:         dbBoolToString(raw.has_kids),
    has_dogs:         dbBoolToString(raw.has_dogs),
    has_cats:         dbBoolToString(raw.has_cats),
    housing_type:     raw.housing_type ?? "",
    dog_size:         raw.dog_size     ?? "",
    dog_age:          raw.dog_age      ?? "",
    dog_breed:        raw.dog_breed    ?? "",
  };
}

// Convert string answers back to booleans/null for the boolean DB fields before saving
function preparePayload(answers: SurveyAnswers) {
  function toBool(val: string | undefined): boolean | null {
    if (val === "Yes") return true;
    if (val === "No")  return false;
    return null; // "Prefer not to say" or anything else
  }
  return {
    living_situation: answers.living_situation || null,
    activity_level:   answers.activity_level   || null,
    has_kids:         toBool(answers.has_kids),
    has_dogs:         toBool(answers.has_dogs),
    has_cats:         toBool(answers.has_cats),
    housing_type:     answers.housing_type || null,
    dog_size:         answers.dog_size     || null,
    dog_age:          answers.dog_age      || null,
    dog_breed:        answers.dog_breed    || null,
  };
}

function formatSummaryValue(id: string, answers: SurveyAnswers): string {
  const val = answers[id as keyof SurveyAnswers];
  if (!val || val === "") return "—";
  return val;
}

// ── Main Component ─────────────────────────────────────────────────────────
export default function PersonalSurveyPage() {
  const router = useRouter();

  const [screen, setScreen] = useState<"loading" | "intro" | "survey" | "done">("loading");
  const [step, setStep]       = useState(0);
  const [answers, setAnswers] = useState<SurveyAnswers>({});
  const [error, setError]     = useState("");
  const [saving, setSaving]   = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  // Dog results
  const [matchedDogs, setMatchedDogs] = useState<any[]>([]);
  const [favorites, setFavorites]     = useState<number[]>([]);
  const [selectedDog, setSelectedDog] = useState<any>(null);

  const total = QUESTIONS.length;

  // ── On mount: read localStorage → fetch survey ───────────────────────────
  useEffect(() => {
    const raw = localStorage.getItem("user");
    if (!raw) {
      window.location.href = "/login?redirect=/personal-survey";
      return;
    }
    const user = JSON.parse(raw);
    const email = user?.email;
    if (!email) {
      window.location.href = "/login?redirect=/personal-survey";
      return;
    }
    setUserEmail(email);

    (async () => {
      try {
        const res  = await fetch(`${API_BASE}/survey?userEmail=${encodeURIComponent(email)}`);
        const data = await res.json();

        if (data.completed && data.answers) {
          // Normalise booleans → strings so radio buttons render correctly
          const normalised = normaliseAnswers(data.answers);
          setAnswers(normalised);
          setScreen("done");
          fetchMatchedDogs(normalised, email);
        } else {
          setScreen("intro");
        }
      } catch {
        setScreen("intro");
      }
    })();
  }, []);

  // ── Fetch matched dogs ───────────────────────────────────────────────────
  function fetchMatchedDogs(surveyAnswers: SurveyAnswers, email: string) {
    const params = new URLSearchParams();
    if (surveyAnswers.dog_breed) params.set("breed", surveyAnswers.dog_breed);
    if (surveyAnswers.dog_age && surveyAnswers.dog_age !== "No preference") params.set("age", surveyAnswers.dog_age);
    if (surveyAnswers.dog_size && surveyAnswers.dog_size !== "No preference") params.set("size", surveyAnswers.dog_size);
    if (surveyAnswers.has_kids === "Yes") params.set("hasKids", "true");
    if (surveyAnswers.has_dogs === "Yes") params.set("hasDogs", "true");
    if (surveyAnswers.has_cats === "Yes") params.set("hasCats", "true");
    if (surveyAnswers.activity_level && surveyAnswers.activity_level !== "Not sure") params.set("activityLevel", surveyAnswers.activity_level);
    if (surveyAnswers.housing_type && surveyAnswers.housing_type !== "Not sure") params.set("housingType", surveyAnswers.housing_type);

    fetch(`${API_BASE}/dogs/match?${params.toString()}`)
      .then((res) => res.json())
      .then((dogsData) => {
        setMatchedDogs(dogsData);
        return fetch(`${API_BASE}/dogs/favorites?userEmail=${encodeURIComponent(email)}`);
      })
      .then((res) => res.json())
      .then((data) => setFavorites(data.dogs.map((f: any) => f.id)))
      .catch((err) => console.error("Error loading matched dogs:", err));
  }

  // ── Toggle favourite ─────────────────────────────────────────────────────
  function toggleFavorite(id: number) {
    const raw = localStorage.getItem("user");
    if (!raw) return;
    const email = JSON.parse(raw)?.email;

    if (favorites.includes(id)) {
      setFavorites(favorites.filter((f) => f !== id));
      fetch(`${API_BASE}/dogs/favorites`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userEmail: email, dogId: id }),
      });
    } else {
      setFavorites([...favorites, id]);
      fetch(`${API_BASE}/dogs/favorites`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userEmail: email, dogId: id }),
      });
    }
  }

  // ── Answer helpers ───────────────────────────────────────────────────────
  const q        = QUESTIONS[step];
  const progress = (step / total) * 100;

  function setAnswer(id: string, val: string) {
    setAnswers((prev) => ({ ...prev, [id]: val }));
    setError("");
  }

  function getCurrentValue(id: string): string {
    return (answers[id as keyof SurveyAnswers] as string) ?? "";
  }

  function validate(): boolean {
    if (!q) return true;
    if (q.required) {
      const val = getCurrentValue(q.id);
      if (!val || val === "") {
        setError("Please answer this question before continuing.");
        return false;
      }
    }
    return true;
  }

  function handleNext() {
    if (!validate()) return;
    if (step < total - 1) { setStep((s) => s + 1); setError(""); }
    else handleSubmit();
  }

  function handleBack() {
    setError("");
    setStep((s) => Math.max(0, s - 1));
  }

  async function handleSubmit() {
    if (!validate()) return;
    setSaving(true);
    try {
      const payload = preparePayload(answers);
      await fetch(`${API_BASE}/survey`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userEmail, answers: payload }),
      });
      setScreen("done");
      fetchMatchedDogs(answers, userEmail!);
    } catch {
      setError("Something went wrong saving your survey. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  async function handleReset() {
    try {
      await fetch(`${API_BASE}/survey`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userEmail }),
      });
    } catch { /* ignore */ }
    setAnswers({});
    setMatchedDogs([]);
    setFavorites([]);
    setStep(0);
    setError("");
    setScreen("intro");
  }

  // ── Screens ───────────────────────────────────────────────────────────────

  if (screen === "loading") {
    return (
      <div className="ps-wrapper">
        <div className="ps-card ps-loading-card">
          <div className="ps-paw-spinner">🐾</div>
          <p className="ps-loading-text">Loading your profile…</p>
        </div>
      </div>
    );
  }

  if (screen === "intro") {
    return (
      <div className="ps-wrapper">
        <div className="ps-card ps-intro-card">
          <div className="ps-intro-eyebrow">Personalized Matching</div>
          <h1 className="ps-intro-title">Find Your Perfect<br /><em>Companion</em></h1>
          <p className="ps-intro-desc">
            Answer {total} quick questions and we'll match you with dogs that truly fit your lifestyle.
          </p>
          <div className="ps-intro-meta">
            <span className="ps-meta-pill">🐶 {total} questions</span>
            <span className="ps-meta-pill">⏱ ~2 minutes</span>
          </div>
          <button className="ps-btn-primary" onClick={() => setScreen("survey")}>
            Start Survey <span className="ps-btn-arrow">→</span>
          </button>
        </div>
      </div>
    );
  }

  if (screen === "done") {
    return (
      <main>
        {selectedDog && <DogModal dog={selectedDog} onClose={() => setSelectedDog(null)} />}

        <div className="ps-done-page">

          {/* Header */}
          <div className="ps-done-page-header">
            <div>
              <h2 className="ps-done-title">Your Profile</h2>
              <p className="ps-done-sub">Here's what you told us.</p>
            </div>
            <button className="ps-btn-ghost" onClick={handleReset}>
              Retake Survey
            </button>
          </div>

          {/* Inline summary rows — label: value pairs across two columns */}
          <div className="ps-inline-summary">
            {Object.keys(SUMMARY_LABELS).map((id) => (
              <div className="ps-inline-row" key={id}>
                <span className="ps-inline-label">{SUMMARY_LABELS[id]}</span>
                <span className="ps-inline-value">{formatSummaryValue(id, answers)}</span>
              </div>
            ))}
          </div>

          {/* Dog results immediately below */}
          <div className="ps-matches-section">
            <h2 className="results-heading">
              Your Matches <span className="results-count">({matchedDogs.length})</span>
            </h2>
            {matchedDogs.length === 0 ? (
              <p className="no-results">No matches found. Try retaking the survey with different preferences.</p>
            ) : (
              <div className="dog-grid">
                {matchedDogs.map((dog) => (
                  <DogCard
                    key={dog.animalID}
                    dog={dog}
                    isFavorite={favorites.includes(dog.id)}
                    onToggleFavorite={toggleFavorite}
                    onCardClick={() => setSelectedDog(dog)}
                  />
                ))}
              </div>
            )}
          </div>

        </div>
      </main>
    );
  }

  // ── Survey screen ────────────────────────────────────────────────────────
  const currentValue = getCurrentValue(q.id);

  return (
    <div className="ps-wrapper">
      <div className="ps-card ps-survey-card">

        <div className="ps-progress-track">
          <div className="ps-progress-fill" style={{ width: `${progress}%` }} />
        </div>

        <div className="ps-step-counter">
          <span className="ps-step-num">{step + 1}</span>
          <span className="ps-step-total"> / {total}</span>
        </div>

        <div className="ps-question-block">
          <h2 className="ps-question-text">
            {q.question}
            {q.required && <span className="ps-required">*</span>}
          </h2>

          {q.type === "radio" && (
            <div className="ps-options-list">
              {q.options!.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  className={`ps-option ${currentValue === opt ? "ps-option--selected" : ""}`}
                  onClick={() => setAnswer(q.id, opt)}
                >
                  <span className="ps-option-radio">
                    {currentValue === opt && <span className="ps-option-radio-fill" />}
                  </span>
                  {opt}
                </button>
              ))}
            </div>
          )}

          {q.type === "text" && (
            <input
              className="ps-text-input"
              type="text"
              value={currentValue}
              onChange={(e) => setAnswer(q.id, e.target.value)}
              placeholder={(q as any).placeholder ?? ""}
            />
          )}

          {error && <p className="ps-error">{error}</p>}
        </div>

        <div className="ps-nav-row">
          {step > 0 && (
            <button className="ps-btn-ghost" onClick={handleBack}>← Back</button>
          )}
          <button className="ps-btn-primary" onClick={handleNext} disabled={saving}>
            {saving ? "Saving…" : step < total - 1 ? "Next →" : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}