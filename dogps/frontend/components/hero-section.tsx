"use client";
import { useState } from "react";
import "./HeroSection.css";

// onSearch = function that receives { location, breed, age }
function HeroSection({ dogs, onSearch }: any) {
  const [location, setLocation] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const breeds = [...new Set(dogs.map((d: any) => d.animalPrimaryBreed))].sort();
  const ageCategories = [...new Set(dogs.map((d: any) => d.animalGeneralAge))].sort();

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log("Searching with", { location, breed, age });
    onSearch({ location, breed, age });
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
            <div className="form-row">
              <input
                type="text"
                className="form-input"
                placeholder="Enter your zipcode or city"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <button type="submit" className="find-dogs-btn">
                Find Dogs
              </button>
            </div>
            <div className="form-row">
              <select
                className="form-select"
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
              >
                <option value="">Breed</option>
                {breeds.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
              <select
                className="form-select"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              >
                <option value="">Age</option>
                {ageCategories.map((a) => (
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
