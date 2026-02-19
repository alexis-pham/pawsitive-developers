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
          // Core listing info
          "animalID",
          "animalName",
          "animalStatus",
          "animalAdoptionFee",
          "animalPrimaryBreed",
          "animalSex",
          "animalGeneralAge",
          "animalGeneralSizePotential",
          "animalSizeCurrent",
          "animalSizeUOM",
          "animalColor",
          "animalDescriptionPlain",
          "animalThumbnailUrl",
          "animalPictures",
          "animalUrl",
          "animalBirthdate",

          // Compatibility / filtering
          "animalOKWithKids",
          "animalOKWithDogs",
          "animalOKWithCats",
          "animalHousetrained",
          "animalAltered",
          "animalActivityLevel",
          "animalEnergyLevel",
          "animalLocation",

          // Special needs
          "animalSpecialneeds",
          "animalSpecialneedsDescription",
          "animalNeedsFoster",
          "animalOKForSeniors",
          "animalApartment",

          // Personality traits
          "animalPlayful",
          "animalAffectionate",
          "animalGentle",
          "animalTimid",
          "animalLap",
          "animalIntelligent",
          "animalEagerToPlease",
          "animalGoofy",
          "animalIndependent",
          "animalProtective",
          "animalSkittish",
          "animalObedient",
          "animalFetches",
          "animalSwims",
          "animalPlaysToys",
          "animalGoodInCar",
          "animalCratetrained",
          "animalLeashtrained"
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

// This function fetches dogs from the API and upserts them into our database
export async function syncDogsFromApi({ apiKey, start = 0, limit =24 } = {}) {
  if (!apiKey) {
    throw new Error("API key is required to sync dogs");
  }

  const apiDogsObj = await getAdoptableDogs({ apiKey, start, limit });

  const apiDogs = Object.values(apiDogsObj);

  const upserted = await upsertDogs(apiDogs);
  return { fetched: apiDogs.length, upserted };
}