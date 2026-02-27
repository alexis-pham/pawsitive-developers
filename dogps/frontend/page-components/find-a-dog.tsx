"use client";
import { useEffect, useState } from "react";
import HeroSection from "../components/hero-section";
import DogCard from "../components/dog-card";
import "./FindADog.css";

function FindADogPage() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [dogs, setDogs] = useState<any[]>([]);
  const [filters, setFilters] = useState({ location: "", breed: "", age: "" });

  useEffect(() => {
    const raw = localStorage.getItem("user");
    if (!raw) return;
    const user = JSON.parse(raw);
    const userEmail = user?.email;

    // Fetch dogs first, then favorites
    fetch("http://localhost:3001/dogs")
      .then((res) => res.json())
      .then((dogsData) => {
        setDogs(dogsData);
        return fetch(`http://localhost:3001/dogs/favorites?userEmail=${userEmail}`);
      })
      .then((res) => res.json())
      .then((data) => {
        setFavorites(data.dogs.map((f: any) => f.id));
      })
      .catch((err) => console.error("Error loading data:", err));
  }, []);

  function handleSearch(newFilters: any) {
    setFilters(newFilters);
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

  const filteredDogs = dogs.filter((dog) => {
    if (filters.breed && dog.animalPrimaryBreed?.toLowerCase() !== filters.breed.toLowerCase()) return false;
    if (filters.age && dog.animalGeneralAge?.toLowerCase() !== filters.age.toLowerCase()) return false;
    if (filters.location && !dog.animalLocation?.toLowerCase().includes(filters.location.toLowerCase())) return false;
    return true;
  });

  return (
    <main>
      <HeroSection dogs={dogs} onSearch={handleSearch} />

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
                key={dog.animalID}
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