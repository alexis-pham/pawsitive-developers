import axios from "axios";
import "dotenv/config";

const apiKey = process.env.DOG_API_KEY;
if (!apiKey) throw new Error("Missing Dog API key");

const api = axios.create({
  baseURL: "https://api.rescuegroups.org",
  timeout: 10_000,
  headers: { "Content-Type": "application/json" },
});

export default api;