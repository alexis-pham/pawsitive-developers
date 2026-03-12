"use client";
import "./Donate.css";

const organizations = [
  {
    name: "ASPCA",
    tagline: "America's first humane society",
    description:
      "For over 160 years, the ASPCA has worked to end animal abuse and neglect. They are a national leader in animal rescue, protection, and placement.",
    url: "https://secure.aspca.org/donate/donate-c?ms=wb_top_homepage-donate&initialms=wb_top_homepage-donate&pcode=WEBMEMBER&lpcode=WEBGUARD",
    cta: "Donate to ASPCA",
  },
  {
    name: "Animal Care Centers of NYC",
    tagline: "New York City's open-door shelter",
    description:
      "ACC NYC shelters and rehomes thousands of animals every year, serving all five boroughs and accepting every animal regardless of condition.",
    url: "https://secure2.convio.net/accn/site/Donation2?idb=1018034444&1400.donation=form1&df_id=1400&mfc_pref=T&idb=0",
    cta: "Donate to ACC NYC",
  },
  {
    name: "The Amanda Foundation",
    tagline: "More than just rescue",
    description:
      "A Beverly Hills-based nonprofit offering free and low-cost veterinary care, a mobile spay/neuter unit, and adoption services for animals in need.",
    url: "https://amandafoundation.org/donate",
    cta: "Donate to Amanda Foundation",
  },
  {
    name: "CUDDLY",
    tagline: "Crowdfunding for animals in need",
    description:
      "CUDDLY connects donors directly to shelter animals and rescues, funding urgent medical care, supplies, and life-saving treatments across the country.",
    url: "https://cuddly.com/donate/change-a-life/",
    cta: "Donate on CUDDLY",
  },
];

function DonatePage() {
  return (
    <main className="donate-page">
      <h1 className="donate-title">Ways to Give</h1>
      <p className="donate-description">
        Supporting animals in need doesn't have to be complicated. Below are
        trusted organizations you can donate to directly — every contribution
        makes a real difference for dogs waiting for their forever homes.
      </p>

      <div className="donate-grid">
        {organizations.map((org) => (
          <div key={org.name} className="donate-card">
            <div className="donate-card-body">
              <p className="donate-card-tagline">{org.tagline}</p>
              <h2 className="donate-card-name">{org.name}</h2>
              <p className="donate-card-description">{org.description}</p>
            </div>
            <a
              href={org.url}
              target="_blank"
              rel="noopener noreferrer"
              className="donate-card-btn"
            >
              {org.cta} →
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}

export default DonatePage;