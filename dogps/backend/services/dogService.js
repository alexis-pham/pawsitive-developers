import api from "../config/api.js"
import { upsertDogs } from "../repos/dogRepo.js";

export async function getAdoptableDogs({ apiKey, start = 0, limit = 24 }) {
  try {
    const response = await api.post("/http/v2.json", {
      apikey: apiKey,
      objectType: "animals",
      objectAction: "publicSearch",
      search: {
        resultStart: start,
        resultLimit: limit,
        resultSort: "animalID",
        resultOrder: "asc",
        filters: [
          {
            fieldName: "animalSpecies",
            operation: "equals",
            criteria: "Dog"
          },
          {
            fieldName: "animalStatus",
            operation: "equals",
            criteria: "Available"
          }
        ],
        fields: [
          "animalID",
          "animalName",
          "animalBreed",
          "animalGeneralAge"
        ]
      }
    });

    const dogs = response.data.data;
    return dogs;
  } catch (err) {
    console.error("Error fetching adoptable dogs:", err.response?.data || err.message);
    throw err;
  }
}

// Map the dog returned from the API to the format we want to store in our database
function mapApiDogToDbDog(a) {
  return {
    external_id: String(a.animalID),
    name: a.animalName ?? null,
    breed: a.animalBreed ?? null,
    age: a.animalGeneralAge?.trim() ? a.animalGeneralAge.trim() : null
  };
}

// This function fetches dogs from the API and upserts them into our database
export async function syncDogsFromApi({ apiKey, start = 0, limit =24 } = {}) {
  if (!apiKey) {
    throw new Error("API key is required to sync dogs");
  }

  const apiDogsObj = await getAdoptableDogs({ apiKey, start, limit });

  const apiDogs = Object.values(apiDogsObj).map(mapApiDogToDbDog);

  const upserted = await upsertDogs(apiDogs);
  return { fetched: apiDogs.length, upserted };
}