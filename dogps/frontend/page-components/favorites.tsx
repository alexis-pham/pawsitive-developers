"use client";
import { useState, useEffect } from "react";
import DogCard from "../components/dog-card";
import DogModal from "../components/DogModal";
import "./Favorites.css";

function FavoritesPage() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [dogs, setDogs] = useState<any[]>([]);
  const [selectedDog, setSelectedDog] = useState<any>(null);
  const [breedFilter, setBreedFilter] = useState("");
  const [ageFilter, setAgeFilter] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loadFavorites = () => {
      const raw = localStorage.getItem("user");
      if (!raw) {
        setIsLoggedIn(false);
        setDogs([]);
        setFavorites([]);
        return;
      }
      setIsLoggedIn(true);
      const user = JSON.parse(raw);
      const userEmail = user?.email;

      fetch(`http://localhost:3001/dogs/favorites?userEmail=${userEmail}`)
        .then((res) => res.json())
        .then((data) => {
          setDogs(data.dogs);
          setFavorites(data.dogs.map((d: any) => d.id));
        })
        .catch((err) => console.error("Error fetching favorites", err));
    };

    loadFavorites();

    window.addEventListener('authChange', loadFavorites);
    return () => window.removeEventListener('authChange', loadFavorites);
  }, []);

  function toggleFavorite(id: number) {
    const raw = localStorage.getItem("user");
    if (!raw) return;
    const user = JSON.parse(raw);
    const userEmail = user?.email;

    if (favorites.includes(id)) {
      setFavorites(favorites.filter((f) => f !== id));
      setDogs(dogs.filter((d) => d.id !== id));
      fetch("http://localhost:3001/dogs/favorites", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userEmail, dogId: id }),
      });
    } else {
      setFavorites([...favorites, id]);
    }
  }

  const breeds = [...new Set(dogs.map((d: any) => d.animalPrimaryBreed).filter(Boolean))].sort();
  const ageCategories = [...new Set(dogs.map((d: any) => d.animalGeneralAge).filter(Boolean))].sort();

  const favoriteDogs = dogs
    .filter((dog) => !breedFilter || dog.animalPrimaryBreed === breedFilter)
    .filter((dog) => !ageFilter || dog.animalGeneralAge === ageFilter);

  if (!isLoggedIn) {
    return (
      <main className="favorites-page">
        <h1 className="favorites-title">Favorites</h1>
        <div className="favorites-empty">
          <p className="empty-title">Sign in to see favorited dogs!</p>
          <p className="empty-subtitle">
            Please <a href="/login?redirect=/favorites" style={{ color: '#00635D', textDecoration: 'underline' }}>sign in</a> to view and manage your favorite dogs.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="favorites-page">
      {selectedDog && <DogModal dog={selectedDog} onClose={() => setSelectedDog(null)} />}
      <h1 className="favorites-title">Favorites</h1>
      <p className="favorites-subtitle">
        Dogs you have favorited will appear here. Heart a dog on the Find a Dog
        page to add them.
      </p>

      <div className="favorites-filters">
        <span className="filter-label">Filter by:</span>
        <select
          className="filter-dropdown"
          value={breedFilter}
          onChange={(e) => setBreedFilter(e.target.value)}
        >
          <option value="">All Breeds</option>
          {breeds.map((b: any) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
        <select
          className="filter-dropdown"
          value={ageFilter}
          onChange={(e) => setAgeFilter(e.target.value)}
        >
          <option value="">All Ages</option>
          {ageCategories.map((a: any) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>
      </div>

      {dogs.length === 0 ? (
        <div className="favorites-empty">
          <p className="empty-title">No favorites yet</p>
          <p className="empty-subtitle">
            Browse dogs and click the heart icon to save them here.
          </p>
        </div>
      ) : favoriteDogs.length === 0 ? (
        <div className="favorites-empty">
          <p className="empty-title">No matches</p>
          <p className="empty-subtitle">Try adjusting your filters.</p>
        </div>
      ) : (
        <div className="favorites-grid">
          {favoriteDogs.map((dog) => (
            <DogCard
              key={dog.id}
              dog={dog}
              isFavorite={favorites.includes(dog.id)}
              onToggleFavorite={toggleFavorite}
              onCardClick={() => setSelectedDog(dog)}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default FavoritesPage;