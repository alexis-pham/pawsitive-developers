import { useState } from "react";
import { FiPlus } from "react-icons/fi";
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