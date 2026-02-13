import express from "express";
const router = express.Router();
import { getAdoptableDogs } from "../services/dogService.js";
import "dotenv/config"

const API_KEY = process.env.DOG_API_KEY;

router.get('/', async (req, res) => {
    const dogs = await getAdoptableDogs({ apiKey: API_KEY });
    res.status(200).send(dogs);
})

export default router;

