"use client";
import { useState } from "react";
import DogCard from "../components/dog-card";
import { dogs, breeds, ageCategories } from "../lib/dogs-data";
import "./Favorites.css";

function FavoritesPage() {
  // favorites is a list of dog ids like ["1", "3"]
  const [favorites, setFavorites] = useState<string[]>([]);

  // filter dropdowns
  const [breedFilter, setBreedFilter] = useState("");
  const [ageFilter, setAgeFilter] = useState("");

  // add or remove a dog from favorites
  function toggleFavorite(id: string) {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((f) => f !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  }

  // get only the dogs that are favorited, then apply filters
  const favoriteDogs = dogs
    .filter((dog) => favorites.includes(dog.id))
    .filter((dog) => {
      if (breedFilter && dog.breed !== breedFilter) return false;
      if (ageFilter && dog.ageCategory !== ageFilter) return false;
      return true;
    });

  return (
    <main className="favorites-page">
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
          {breeds.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
        <select
          className="filter-dropdown"
          value={ageFilter}
          onChange={(e) => setAgeFilter(e.target.value)}
        >
          <option value="">All Ages</option>
          {ageCategories.map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>
      </div>

      {favorites.length === 0 ? (
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
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default FavoritesPage;
