import { useEffect } from "react";
import "./DogPopup.css";

function DogPopup({ isOpen, onClose, dog }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const title = dog?.animalName || "Unknown name";
  const image = dog?.animalThumbnailUrl || "";
  const breed = dog?.animalPrimaryBreed || "Unknown";
  const age = dog?.animalGeneralAge || "Unknown";
  const description = dog?.animalDescription || "";

  return (
    <div className="dog-popup-overlay" onClick={onClose}>
      <div className="dog-popup" onClick={(e) => e.stopPropagation()}>
        {/* Close button (no react-icons) */}
        <button
          className="dog-popup-close"
          onClick={onClose}
          type="button"
          aria-label="Close"
        >
          ×
        </button>

        {/* Image */}
        <div className="dog-popup-imageWrap">
          {image ? (
            <img src={image} alt={title} className="dog-popup-image" />
          ) : (
            <div className="dog-popup-noImage">No Image</div>
          )}
        </div>

        {/* Content */}
        <div className="dog-popup-content">
          <h2 className="dog-popup-title">{title}</h2>

          <div className="dog-popup-meta">
            <p>
              <strong>Breed:</strong> {breed}
            </p>
            <p>
              <strong>Age:</strong> {age}
            </p>
          </div>

          {description && (
            <p className="dog-popup-description">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default DogPopup;