"use client";
import "./About.css";

const values = [
  {
    title: "Compassion First",
    description:
      "Every animal deserves love and a safe home. We work with shelters to ensure every dog finds a family.",
  },
  {
    title: "Community Driven",
    description:
      "We connect shelters, volunteers, and adopters to build a stronger community for our four-legged friends.",
  },
  {
    title: "Forever Homes",
    description:
      "Our mission is to reduce shelter overcrowding by making the adoption process simple and accessible.",
  },
];

function AboutPage() {
  return (
    <main className="about-page">
      <h1 className="about-title">About Pawsitive</h1>
      <p className="about-description">
        Pawsitive is a platform dedicated to helping dogs find their forever
        homes. We partner with local shelters across the country to bring you
        up-to-date listings of adoptable dogs, making it easier than ever to
        find your perfect companion.
      </p>

      <div className="values-grid">
        {values.map((item) => (
          <div key={item.title} className="value-card">
            <h2 className="value-title">{item.title}</h2>
            <p className="value-description">{item.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default AboutPage;
