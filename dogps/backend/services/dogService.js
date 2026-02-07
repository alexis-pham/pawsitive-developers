import "dotenv/config";
import api from "../config/api.js"

export async function getAdoptableDogs({ limit = 20, offset = 0 }) {
  try {
    const response = await api.get("/public/animals", {
      params: {
        animalStatus: "Available", // only adoptable pets
        animalSpecies: "Dog",      // only dogs
        limit,
        offset,
      },
    });

    const dogs = response.data.data;
    return dogs;
  } catch (err) {
    console.error("Error fetching adoptable dogs:", err.response?.data || err.message);
    throw err;
  }
}
