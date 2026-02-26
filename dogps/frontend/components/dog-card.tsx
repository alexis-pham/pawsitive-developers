"use client";
import "./DogCard.css";

// dog = one dog object from dogs-data.ts
// isFavorite = true/false
// onToggleFavorite = function that takes a dog id
function DogCard({ dog, isFavorite, onToggleFavorite }: any) {
  return (
    <div className="dog-card">
      <button
        className={isFavorite ? "favorite-btn favorited" : "favorite-btn"}
        onClick={() => onToggleFavorite(dog.id)}
      >
        {isFavorite ? "\u2665" : "\u2661"}
      </button>

      <div className="dog-card-image">
        <img src={dog.image} alt={dog.name} />
      </div>

      <div className="dog-card-info">
        <div className="dog-card-header">
          <h3 className="dog-card-name">{dog.name}</h3>
          <span className={dog.gender === "Male" ? "dog-card-gender male" : "dog-card-gender female"}>
            {dog.gender}
          </span>
        </div>
        <p className="dog-card-breed">{dog.breed}</p>
        <div className="dog-card-meta">
          <span>{dog.location}</span>
          <span>{dog.age}</span>
        </div>
      </div>
    </div>
  );
}

export default DogCard;
