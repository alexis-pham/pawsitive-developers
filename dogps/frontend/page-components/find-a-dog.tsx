"use client";
import { useEffect, useState } from "react";
import HeroSection from "../components/hero-section";
import DogCard from "../components/dog-card";
import "./FindADog.css";


function FindADogPage() {
  // favorites is a list of dog ids like ["1", "3"]
  const [favorites, setFavorites] = useState<string[]>([]);
  const [dogs, setDogs] = useState<any[]>([]);



  useEffect(() => {
      const getDogs = async () => {
      try {
        const response = await fetch("http://localhost:3001/dogs");
        const data = await response.json();
        setDogs(data);
        console.log(data);
      } catch(error) {
        console.error(error);
      }
    };
    getDogs();
  }, [])


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
  console.log( "filters: ", filters);
  console.log("dog: ", dog);
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
            { filteredDogs
            .map((dog) => (
              <DogCard
                key={dog.animalID}
                dog={dog}
                isFavorite={favorites.includes(dog.animalID)}
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
