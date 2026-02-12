import api from "../config/api.js"

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
          "animalName"
        ]
      }
    });

    const dogs = response.data;
    return dogs;
  } catch (err) {
    console.error("Error fetching adoptable dogs:", err.response?.data || err.message);
    throw err;
  }
}
