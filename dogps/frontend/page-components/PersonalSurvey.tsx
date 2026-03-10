"use client";
import { useState } from "react";
import "./personal-survey.css";

// ── Types ──────────────────────────────────────────────────────────────────
type QuestionType = "radio" | "checkbox" | "rating" | "text" | "select";

interface Question {
  id: string;
  type: QuestionType;
  question: string;
  options?: string[];
  min?: number;
  max?: number;
  placeholder?: string;
  required?: boolean;
}

type Answers = Record<string, string | string[] | number>;

// ── Survey Data ────────────────────────────────────────────────────────────
const SURVEY = {
  title: "Customer Feedback",
  description: "Help us improve by sharing your experience. Takes about 2 minutes.",
  questions: [
    {
      id: "q1", type: "radio" as QuestionType,
      question: "How did you hear about us?",
      options: ["Social Media", "Friend / Referral", "Search Engine", "Advertisement", "Other"],
      required: true,
    },
    {
      id: "q2", type: "rating" as QuestionType,
      question: "How would you rate your overall experience?",
      min: 1, max: 5, required: true,
    },
    {
      id: "q3", type: "checkbox" as QuestionType,
      question: "Which features do you use most?",
      options: ["Dashboard", "Reports", "Integrations", "API", "Mobile App"],
      required: false,
    },
    {
      id: "q4", type: "select" as QuestionType,
      question: "How often do you use our product?",
      options: ["Daily", "Weekly", "Monthly", "Rarely"],
      required: true,
    },
    {
      id: "q5", type: "text" as QuestionType,
      question: "What could we do better?",
      placeholder: "Share your thoughts...",
      required: false,
    },
  ] as Question[],
};

// ── Question Components ────────────────────────────────────────────────────
function RadioQ({ q, value, onChange }: { q: Question; value: string; onChange: (v: string) => void }) {
  return (
    <div className="options-list">
      {q.options!.map((opt) => (
        <label key={opt} className={`option-label ${value === opt ? "selected" : ""}`} onClick={() => onChange(opt)}>
          <span className={`radio-dot ${value === opt ? "active" : ""}`}>
            {value === opt && <span className="radio-inner" />}
          </span>
          {opt}
        </label>
      ))}
    </div>
  );
}

function CheckboxQ({ q, value = [], onChange }: { q: Question; value: string[]; onChange: (v: string[]) => void }) {
  const toggle = (opt: string) =>
    onChange(value.includes(opt) ? value.filter((v) => v !== opt) : [...value, opt]);
  return (
    <div className="options-list">
      {q.options!.map((opt) => (
        <label key={opt} className={`option-label ${value.includes(opt) ? "selected" : ""}`} onClick={() => toggle(opt)}>
          <span className={`checkbox-box ${value.includes(opt) ? "active" : ""}`}>
            {value.includes(opt) && <span className="checkmark">✓</span>}
          </span>
          {opt}
        </label>
      ))}
    </div>
  );
}

function RatingQ({ q, value, onChange }: { q: Question; value: number; onChange: (v: number) => void }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="rating-row">
      {Array.from({ length: q.max! }, (_, i) => i + 1).map((star) => (
        <button
          key={star}
          type="button"
          className={`star-btn ${star <= (hovered || value) ? "active" : ""}`}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => onChange(star)}
        >★</button>
      ))}
      {value > 0 && <span className="rating-label">{value} / {q.max}</span>}
    </div>
  );
}

function SelectQ({ q, value, onChange }: { q: Question; value: string; onChange: (v: string) => void }) {
  return (
    <select className="select-input" value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="">Select an option...</option>
      {q.options!.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
    </select>
  );
}

function TextQ({ q, value, onChange }: { q: Question; value: string; onChange: (v: string) => void }) {
  return (
    <textarea
      className="text-input"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={q.placeholder}
      rows={4}
    />
  );
}

const QUESTION_MAP = {
  radio: RadioQ,
  checkbox: CheckboxQ,
  rating: RatingQ,
  select: SelectQ,
  text: TextQ,
};

// ── Main Component ─────────────────────────────────────────────────────────
function PersonalSurveyPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [error, setError] = useState("");

  const total = SURVEY.questions.length;
  const isIntro = step === 0;
  const isDone = step === total + 1;
  const q = SURVEY.questions[step - 1];
  const progress = step > 0 ? ((step - 1) / total) * 100 : 0;

  const setAnswer = (id: string, val: string | string[] | number) => {
    setAnswers((prev) => ({ ...prev, [id]: val }));
    setError("");
  };

  const validate = () => {
    if (!q) return true;
    const ans = answers[q.id];
    if (q.required && (!ans || (Array.isArray(ans) && ans.length === 0))) {
      setError("This question is required.");
      return false;
    }
    return true;
  };

  const next = () => { if (validate()) setStep((s) => s + 1); };
  const back = () => { setError(""); setStep((s) => Math.max(0, s - 1)); };
  const submit = () => { if (validate()) { console.log("Submitted:", answers); setStep(total + 1); } };
  const reset = () => { setStep(0); setAnswers({}); setError(""); };

  if (isDone) {
    return (
      <div className="survey-wrapper">
        <div className="survey-card done-card">
          <div className="done-icon">✦</div>
          <h2 className="done-title">Thank you!</h2>
          <p className="done-sub">Your response has been recorded.</p>
          <button className="btn-primary" onClick={reset}>Submit another response</button>
        </div>
      </div>
    );
  }

  if (isIntro) {
    return (
      <div className="survey-wrapper">
        <div className="survey-card intro-card">
          <span className="survey-badge">Survey</span>
          <h1 className="survey-title">{SURVEY.title}</h1>
          <p className="survey-desc">{SURVEY.description}</p>
          <div className="meta-row">
            <span>{total} questions</span>
            <span>~2 min</span>
          </div>
          <button className="btn-primary" onClick={() => setStep(1)}>Start Survey →</button>
        </div>
      </div>
    );
  }

  const QuestionComponent = QUESTION_MAP[q.type];

  return (
    <div className="survey-wrapper">
      <div className="survey-card">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>

        <div className="step-indicator">
          {step} <span className="step-of">of {total}</span>
        </div>

        <div className="question-block">
          <h2 className="question-text">
            {q.question}
            {q.required && <span className="required-mark"> *</span>}
          </h2>

          <QuestionComponent
            q={q}
            value={answers[q.id] as any}
            onChange={(val: any) => setAnswer(q.id, val)}
          />

          {error && <p className="error-msg">{error}</p>}
        </div>

        <div className="nav-row">
          {step > 1 && <button className="btn-ghost" onClick={back}>← Back</button>}
          {step < total
            ? <button className="btn-primary" onClick={next}>Next →</button>
            : <button className="btn-primary" onClick={submit}>Submit</button>
          }
        </div>
      </div>
    </div>
  );
}

export default PersonalSurveyPage;