"use client";
import { useState, useEffect, useRef } from "react";
import "./HeroSection.css";
import { v4 as uuidv4 } from "uuid";

function useDebounced<T>(value: T, delayMs: number) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delayMs);
    return () => clearTimeout(t);
  }, [value, delayMs]);
  return debounced;
}

// onSearch = function that receives { location, breed, age }
function HeroSection({ dogs, onSearch }: any) {
  const [location, setLocation] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const breeds = [...new Set(dogs.map((d: any) => d.animalPrimaryBreed))].sort();
  const ageCategories = [...new Set(dogs.map((d: any) => d.animalGeneralAge))].sort();
  const [input, setInput] = useState("");
  const debounced = useDebounced(input, 150);
  

  // One token per "typing session"
  const [sessionToken, setSessionToken] = useState(() => uuidv4());

  const [suggestions, setSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const abortRef = useRef<AbortController | null>(null);
  const requestIdRef = useRef(0);
  const suppressAutocompleteRef = useRef(false);

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log("Searching with", { location, breed, age });
    onSearch({ location, breed, age });
  }

  // START OF ZIP CODE AUTOCOMPLETE

  useEffect(() => {
    const q = debounced.trim();
 
    // If we just picked an item, don't re-open the dropdown from the
    // debounced value changing to the selected label.
    if (suppressAutocompleteRef.current) {
      setIsOpen(false);
      return;
    }

    if (!q) {
      setSuggestions([]);
      setIsOpen(false);
      return;
    }

    // Abort previous request & mark a new request id
    abortRef.current?.abort();
    const ac = new AbortController();
    abortRef.current = ac;
    const myRequestId = ++requestIdRef.current;

    (async () => {
      const resp = await fetch(
        `http://localhost:3001/places/autocomplete?input=${encodeURIComponent(q)}&sessionToken=${encodeURIComponent(sessionToken)}`,
        { signal: ac.signal }
      );
      const data = await resp.json();
    
      // Ignore stale responses
      if (myRequestId !== requestIdRef.current) return;
      const next = data.suggestions ?? [];
      setSuggestions(next);
      setIsOpen(next.length > 0);

    })().catch((err) => {
      // Ignore abort errors
      if (err?.name === "AbortError") return;
      setSuggestions([]);
      setIsOpen(false);
    });
  }, [debounced, sessionToken]);

  async function onPick(s : any) {
    suppressAutocompleteRef.current = true;

    // Stop any pending autocomplete from re-opening dropdown
    abortRef.current?.abort();
    requestIdRef.current++;

    setInput(s.label);
    setIsOpen(false);
    setSuggestions([]);

    const resp = await fetch(
      `http://localhost:3001/places/details?placeId=${encodeURIComponent(s.placeId)}&sessionToken=${encodeURIComponent(sessionToken)}`
    );
    const details = await resp.json();

    console.log("ZIP:", details.postalCode);
    console.log("LatLng:", details.location);

    // Start a new session after selection
    setSessionToken(uuidv4());

  }

  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Find your <span className="highlight">best friend</span> today
          </h1>
          <p>
            Use our search feature to find the newest addition to your home.
            Sort by location, age, and breed and sign in to save your favorites
            for later.
          </p>

          <form className="hero-form" onSubmit={handleSubmit}>
            <div className="form-row" style={{ position: "relative", width: 360 }}>
              <input
                className="form-input"
                value={input}
                onChange={(e) => {
                  suppressAutocompleteRef.current = false;
                  setInput(e.target.value);
                }}
                onFocus={() => {
                  if (input.trim() && suggestions.length) setIsOpen(true);
                }}
                placeholder="Enter ZIP or city"
                autoComplete="off"
                style={{ width: "100%" }}
              />

              {isOpen && suggestions.length > 0 && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    right: 0,
                    border: "1px solid #ddd",
                    background: "white",
                    zIndex: 10,
                  }}
                >
                  {suggestions.map((s : any) => (
                    <button
                      key={s.placeId}
                      type="button"
                      onMouseDown={(e) => {
                        e.preventDefault();
                        onPick(s);
                      }}
                      style={{
                        display: "block",
                        width: "100%",
                        textAlign: "left",
                        padding: "8px 10px",
                        border: "none",
                        background: "white",
                        cursor: "pointer",
                      }}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="form-row">
              <select
                className="form-select"
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
              >
                <option value="">Breed</option>
                {breeds.map((b : any) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
              <select
                className="form-select"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              >
                <option value="">Age</option>
                {ageCategories.map((a : any) => (
                  <option key={a} value={a}>{a}</option>
                ))}
              </select>
            </div>
          </form>
        </div>

        <div className="hero-image">
          <img src="/images/hero-dog.jpg" alt="Happy dog on a beach" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;