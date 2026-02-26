"use client";
import { useState } from "react";
import HeroSection from "../components/hero-section";
import DogCard from "../components/dog-card";
import { dogs } from "../lib/dogs-data";
import "./FindADog.css";

function FindADogPage() {
  // favorites is a list of dog ids like ["1", "3"]
  const [favorites, setFavorites] = useState<string[]>([]);

  // search filters
  const [filters, setFilters] = useState({ location: "", breed: "", age: "" });

  // when the user clicks "Find Dogs" in the hero
  function handleSearch(newFilters: any) {
    setFilters(newFilters);
  }

  // add or remove a dog from favorites
  function toggleFavorite(id: string) {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((f) => f !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  }

  // filter dogs based on search
  const filteredDogs = dogs.filter((dog) => {
    if (filters.breed && dog.breed !== filters.breed) return false;
    if (filters.age && dog.ageCategory !== filters.age) return false;
    if (filters.location && !dog.location.toLowerCase().includes(filters.location.toLowerCase())) return false;
    return true;
  });

  return (
    <main>
      <HeroSection onSearch={handleSearch} />

      <div className="results-section">
        <h2 className="results-heading">
          Available Dogs <span className="results-count">({filteredDogs.length})</span>
        </h2>

        {filteredDogs.length === 0 ? (
          <p className="no-results">No dogs found. Try adjusting your filters.</p>
        ) : (
          <div className="dog-grid">
            {filteredDogs.map((dog) => (
              <DogCard
                key={dog.id}
                dog={dog}
                isFavorite={favorites.includes(dog.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default FindADogPage;
