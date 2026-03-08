import 'dotenv/config';

export function extractZipFromAnimalLocation(animalLocation) {
  if (!animalLocation || typeof animalLocation !== "string") return null;

  const m = animalLocation.match(/\b(\d{5})(?:-\d{4})?\b/);
  return m ? m[1] : null; // return 5-digit ZIP only
}

// services/locationNormalize.js
function getComponent(components, type) {
  return components?.find(c => c.types?.includes(type)) || null;
}

export function parseCityStateFromGeocode(components) {
  const state = getComponent(components, "administrative_area_level_1")?.short_name || null;

  // US: locality is usually "city"
  const city =
    getComponent(components, "locality")?.long_name ||
    getComponent(components, "postal_town")?.long_name ||
    getComponent(components, "sublocality_level_1")?.long_name ||
    null;

  return { city, state: state ? state.toUpperCase() : null };
}

export async function geocodeZipToCityState(zip) {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  if (!apiKey) throw new Error("Missing GOOGLE_MAPS_API_KEY");

  const url = new URL("https://maps.googleapis.com/maps/api/geocode/json");
  url.searchParams.set("address", zip);
  url.searchParams.set("components", "country:US");
  url.searchParams.set("key", apiKey);

  const resp = await fetch(url.toString());
  if (!resp.ok) throw new Error(`Geocode HTTP ${resp.status}`);

  const data = await resp.json();
  if (data.status !== "OK" || !data.results?.length) return null;

  const best = data.results[0];
  const { city, state } = parseCityStateFromGeocode(best.address_components);

  if (!city || !state) return null;
  return { city, state };
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

/**
 * Adds animalCity/animalState to each dog when possible.
 * Caches ZIP->(city,state) to avoid repeated geocodes.
 */
export async function enrichDogsWithCityState(apiDogs, { throttleMs = 50 } = {}) {
  const cache = new Map(); // zip -> {city,state} | null

  // gather unique zips to minimize calls
  const zips = new Set();
  for (const d of apiDogs) {
    const zip = extractZipFromAnimalLocation(d.animalLocation);
    if (zip) zips.add(zip);
  }

  // geocode unique zips once
  for (const zip of zips) {
    if (cache.has(zip)) continue;
    try {
      const resolved = await geocodeZipToCityState(zip);
      cache.set(zip, resolved); // may be null
    } catch (e) {
      console.error("Geocode failed for zip:", zip, e?.message || e);
      cache.set(zip, null);
    }
    if (throttleMs) await sleep(throttleMs);
  }

  // apply to dogs
  return apiDogs.map(d => {
    // don't overwrite if already present
    if (d.animalCity && d.animalState) return d;

    const zip = extractZipFromAnimalLocation(d.animalLocation);
    const resolved = zip ? cache.get(zip) : null;

    return {
      ...d,
      animalCity: resolved?.city ?? d.animalCity ?? null,
      animalState: resolved?.state ?? d.animalState ?? null,
    };
  });
}