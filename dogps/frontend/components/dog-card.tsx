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
        onClick={() => onToggleFavorite(dog.id)}      >
        {isFavorite ? "\u2665" : "\u2661"}
      </button>

      <div className="dog-card-image">
        <img src={dog.animalThumbnailUrl} alt={dog.animalName} />
      </div>

      <div className="dog-card-info">
        <div className="dog-card-header">
          <h3 className="dog-card-name">{dog.animalName}</h3>
          <span className={
            dog.animalSex === "Male" ? "dog-card-gender male" :
            dog.animalSex === "Female" ? "dog-card-gender female" :
             "dog-card-gender unknown"}>
            {dog.animalSex || "N/A"}
          </span>
        </div>
        <p className="dog-card-breed">{dog.animalPrimaryBreed}</p>
        <div className="dog-card-meta">
          <span>Zip Code: {dog.animalLocation}</span>
          <span>{dog.animalGeneralAge}</span>
        </div>
      </div>
    </div>
  );
}

export default DogCard;
