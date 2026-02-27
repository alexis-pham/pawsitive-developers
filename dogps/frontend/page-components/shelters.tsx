"use client";
import "./Shelters.css";

const shelters = [
  {
    name: "Happy Tails Rescue",
    address: "123 Main St, Irvine, CA 92618",
    phone: "(949) 555-0123",
    hours: "Mon-Sat 10am-6pm",
  },
  {
    name: "Paws & Claws Shelter",
    address: "456 Oak Ave, San Diego, CA 92101",
    phone: "(619) 555-0456",
    hours: "Mon-Sun 9am-5pm",
  },
  {
    name: "Second Chance Animals",
    address: "789 Elm Blvd, Los Angeles, CA 90001",
    phone: "(213) 555-0789",
    hours: "Tue-Sat 11am-7pm",
  },
];

function SheltersPage() {
  return (
    <main className="shelters-page">
      <h1 className="shelters-title">Find Shelters</h1>
      <p className="shelters-subtitle">
        Locate shelters near you and visit to meet your new best friend in
        person.
      </p>

      <div className="shelters-grid">
        {shelters.map((shelter) => (
          <div key={shelter.name} className="shelter-card">
            <h2 className="shelter-name">{shelter.name}</h2>
            <div className="shelter-details">
              <p>{shelter.address}</p>
              <p>{shelter.phone}</p>
              <p>{shelter.hours}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default SheltersPage;
