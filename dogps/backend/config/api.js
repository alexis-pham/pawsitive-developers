import axios from "axios";

const apiKey = process.env.DOG_API_KEY;
if (!apiKey) throw new Error("Missing Dog API key");

export const api = axios.create({
  baseURL: "https://api.rescuegroups.org/api/v2",
  params: {
    apiKey,
    format: "json",
  },
});
