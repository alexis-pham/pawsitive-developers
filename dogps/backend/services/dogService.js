import api from "../config/api.js"
import { upsertDogs } from "../repos/dogRepo.js";
import { enrichDogsWithCityState } from "./locationNormalize.js";

export async function getAdoptableDogs({ apiKey, start = 0, limit = 500 }) {
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
          "animalCity",
          "animalState",

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

// Cleans the dog data
function sanitizeDogData(apiDogs) {
  const validDogs = apiDogs.filter(dog => {
    // Invalid dog regex (non letter or spaces (multi word))
    const regex = /[^a-zA-Z]|\s|MYSTERY|foster|adopt|^.$/i;
    return !(
       regex.test(dog["animalName"]) 
    || dog["animalPrimaryBreed"] == (null || "") 
    || dog["animalGeneralAge"] == (null || "") 
    || dog["animalLocation"] == (null || ""));
  });
  return validDogs;
};

// This function fetches dogs from the API and upserts them into our database
export async function syncDogsFromApi({ apiKey, start = 0, limit = 500 } = {}) {
  if (!apiKey) {
    throw new Error("API key is required to sync dogs");
  }

  const apiDogsObj = await getAdoptableDogs({ apiKey, start, limit });

  const apiDogs = Object.values(apiDogsObj);
  console.log(apiDogs)
  // Clean the dog data so we drop entries that arent dogs
  const cleanDogs = sanitizeDogData(apiDogs);

  const enrichedDogs = await enrichDogsWithCityState(cleanDogs);

  const upserted = await upsertDogs(enrichedDogs);
  return { fetched: apiDogs.length, upserted };
}