import { useState } from "react";
import "./DogTile.css";
import DogPopup from "./DogPopup";

function DogTile({ dog }) {
  const [open, setOpen] = useState(false);
  

  const handleOpen = () => setOpen(true);

  const title = dog?.animalName || "Unknown name";
  const image = dog?.animalThumbnailUrl || "";
  const breed = dog?.animalPrimaryBreed || "Unknown";
  const age = dog?.animalGeneralAge || "Unknown";

  return (
    <>
      <div className="dog-card" onClick={handleOpen}>
        {/* Image Section */}
        <div className="dog-card-image-container">
          {image ? (
            <img src={image} alt={title} className="dog-card-image" />
          ) : (
            <div className="dog-card-no-image">No Image</div>
          )}

          <button
            className="dog-card-plus"
            onClick={(e) => {
              e.stopPropagation();
                const user = JSON.parse(localStorage.getItem("user"));
                const userEmail = user?.email;
                console.log(userEmail);
                let dogId = dog.id;
                console.log(dogId);
                fetch('http://localhost:3001/dogs/favorites', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({userEmail, dogId}),
                })

            }}
            type="button"
            aria-label={`View ${title}`}
          >
            ♡
          </button>
        </div>

        {/* Text Section */}
        <div className="dog-card-content">
          <div>
            <h3 className="dog-card-title">{title}</h3>
            <p className="dog-card-breed">Breed: {breed}</p>
            <p className="dog-card-age">Age: {age}</p>
          </div>
        </div>
      </div>

      <DogPopup isOpen={open} onClose={() => setOpen(false)} dog={dog} />
    </>
  );
}

export default DogTile;