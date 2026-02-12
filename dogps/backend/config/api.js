import axios from "axios";
import "dotenv/config";

const apiKey = process.env.DOG_API_KEY;
if (!apiKey) throw new Error("Missing Dog API key");

const api = axios.create({
  baseURL: "https://api.rescuegroups.org/api/v2",
  params: {
    apiKey,
    format: "json",
  },
});

export default api;