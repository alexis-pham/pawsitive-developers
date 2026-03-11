"use client";
import { useEffect, useState } from "react";
import HeroSection from "../components/hero-section";
import DogCard from "../components/dog-card";
import DogModal from "../components/DogModal";
import "./FindADog.css";

function FindADogPage() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [results, setResults] = useState<any[]>([]);
  const [selectedDog, setSelectedDog] = useState<any>(null);

  useEffect(() => {
    const raw = localStorage.getItem("user");
    if (!raw) return;
    const user = JSON.parse(raw);
    const userEmail = user?.email;

    // Fetch dogs first, then favorites
    fetch("http://localhost:3001/dogs")
      .then((res) => res.json())
      .then((dogsData) => {

        const seen = new Set<string>();
        const validDogs = dogsData.filter((dog: any) => {
          const key = `${dog.animalName}|${dog.animalSex}|${dog.animalPrimaryBreed}`;
          if (seen.has(key)) return false;
          seen.add(key);
          return true;
        });

        setResults(validDogs);
        return fetch(`http://localhost:3001/dogs/favorites?userEmail=${userEmail}`);
      })
      .then((res) => res.json())
      .then((data) => {
        setFavorites(data.dogs.map((f: any) => f.id));
      })
      .catch((err) => console.error("Error loading data:", err));
  }, []);

  function handleSearch(newFilters: any) {
    const params = new URLSearchParams();
    if (newFilters.breed) params.set("breed", newFilters.breed);
    if (newFilters.age) params.set("age", newFilters.age);
    if (newFilters.city) params.set("city", newFilters.city);
    if (newFilters.state) params.set("state", newFilters.state);

    fetch(`http://localhost:3001/dogs?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => setResults(data))
      .catch((err) => console.error("Error fetching filtered dogs:", err));
  }

  function toggleFavorite(id: number) {
    const raw = localStorage.getItem("user");
    if (!raw) return;
    const user = JSON.parse(raw);
    const userEmail = user?.email;

    if (favorites.includes(id)) {
      setFavorites(favorites.filter((f) => f !== id));
      fetch("http://localhost:3001/dogs/favorites", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userEmail, dogId: id }),
      });
    } else {
      setFavorites([...favorites, id]);
      fetch("http://localhost:3001/dogs/favorites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userEmail, dogId: id }),
      });
    }
  }

  return (
    <main>
      <HeroSection dogs={results} onSearch={handleSearch} />
      {selectedDog && <DogModal dog={selectedDog} onClose={() => setSelectedDog(null)} />}

      <div className="results-section">
        <h2 className="results-heading">
          Available Dogs <span className="results-count">({results.length})</span>
        </h2>

        {results.length === 0 ? (
          <p className="no-results">No dogs found. Try adjusting your filters.</p>
        ) : (
          <div className="dog-grid">
            {results.map((dog) => (
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
    </main>
  );
}

export default FindADogPage;