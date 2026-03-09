"use client";
import "./DogModal.css";

function decode(str: string | null | undefined): string {
  if (!str) return "";
  const txt = document.createElement("textarea");
  txt.innerHTML = str;
  return txt.value;
}

function DogModal({ dog, onClose }: { dog: any; onClose: () => void }) {
  if (!dog) return null;

  const compatibilityItems = [
    { label: "Good with kids", value: dog.animalOKWithKids },
    { label: "Good with dogs", value: dog.animalOKWithDogs },
    { label: "Good with cats", value: dog.animalOKWithCats },
    { label: "Housetrained", value: dog.animalHousetrained },
  ].filter((item) => item.value && item.value.toLowerCase() === "yes");

  const quickFacts = [
    { label: "Breed", value: dog.animalPrimaryBreed },
    { label: "Age", value: dog.animalGeneralAge },
    { label: "Color", value: dog.animalColor },
    { label: "Size", value: dog.animalGeneralSizePotential },
    {
      label: "Location",
      value:
        dog.animalCity && dog.animalState
          ? `${dog.animalCity}, ${dog.animalState}`
          : dog.animalCity || dog.animalState || null,
    },
    { label: "Activity level", value: dog.animalActivityLevel },
  ].filter((f) => f.value);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className="modal-body">
          {/* Name row */}
          <div className="modal-header">
            <h2 className="modal-name">{decode(dog.animalName)}</h2>
            {dog.animalSex && (
              <span
                className={`modal-gender ${
                  dog.animalSex === "Male"
                    ? "male"
                    : dog.animalSex === "Female"
                    ? "female"
                    : "unknown"
                }`}
              >
                {dog.animalSex}
              </span>
            )}
          </div>

          {/* Image + facts side by side */}
          <div className="modal-top">
            {dog.animalThumbnailUrl && (
              <div className="modal-image">
                <img src={dog.animalThumbnailUrl} alt={dog.animalName} />
              </div>
            )}

            {quickFacts.length > 0 && (
              <div className="modal-facts">
                {quickFacts.map((f) => (
                  <div key={f.label} className="modal-fact">
                    <span className="fact-label">{f.label}</span>
                    <span className="fact-value">{decode(f.value)}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {compatibilityItems.length > 0 && (
            <div className="modal-section">
              <h4 className="modal-section-title">Good with</h4>
              <div className="modal-tags">
                {compatibilityItems.map((item) => (
                  <span key={item.label} className="modal-tag">
                    {item.label.replace("Good with ", "")}
                  </span>
                ))}
              </div>
            </div>
          )}

          {dog.animalSpecialneeds &&
            dog.animalSpecialneeds.toLowerCase() === "yes" && (
              <div className="modal-special-needs">
                Special needs
                {dog.animalSpecialneedsDescription && (
                  <span className="special-needs-desc">
                    {" "}— {decode(dog.animalSpecialneedsDescription)}
                  </span>
                )}
              </div>
            )}

          {(dog.fosterName || dog.fosterEmail || dog.fosterPhoneCell || dog.locationAddress) && (
            <div className="modal-section">
              <h4 className="modal-section-title">Contact</h4>
              <div className="modal-contact">
                {dog.fosterName && (
                  <div className="contact-row">
                    <span className="contact-label">Foster</span>
                    <span className="contact-value">{dog.fosterName}</span>
                  </div>
                )}
                {dog.fosterEmail && (
                  <div className="contact-row">
                    <span className="contact-label">Email</span>
                    <a className="contact-link" href={`mailto:${dog.fosterEmail}`}>{dog.fosterEmail}</a>
                  </div>
                )}
                {dog.fosterPhoneCell && (
                  <div className="contact-row">
                    <span className="contact-label">Phone</span>
                    <a className="contact-link" href={`tel:${dog.fosterPhoneCell}`}>{dog.fosterPhoneCell}</a>
                  </div>
                )}
                {dog.locationAddress && (
                  <div className="contact-row">
                    <span className="contact-label">Address</span>
                    <span className="contact-value"><a className="contact-link" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(dog.locationAddress)}`} target="_blank">{dog.locationAddress}</a></span>
                  </div>
                )}
              </div>
            </div>
          )}

          {dog.animalDescriptionPlain && (
            <div className="modal-section">
              <h4 className="modal-section-title">About</h4>
              <p className="modal-description">{decode(dog.animalDescriptionPlain)}</p>
            </div>
          )}

          <div className="modal-footer">
            {dog.animalAdoptionFee != null && dog.animalAdoptionFee !== "" && (
              <span className="modal-fee">
                Adoption fee: <strong>${String(dog.animalAdoptionFee).replace(/^\$/, "")}</strong>
              </span>
            )}
            {dog.animalUrl && (
              <a
                className="modal-link"
                href={dog.animalUrl}
                target="_blank"
                rel="noreferrer"
              >
                View full profile
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DogModal;
