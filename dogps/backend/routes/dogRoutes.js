import express from "express";
const router = express.Router();
import { getAdoptableDogs } from "../services/dogService.js";
import "dotenv/config"
import { syncDogsFromApi } from "../services/dogService.js";
import { searchDogs } from "../repos/dogRepo.js";

const API_KEY = process.env.DOG_API_KEY;

// GET /dogs?breed=&age=
router.get('/', async (req, res) => {
    try {
        const breed = typeof req.query.breed === "string" ? req.query.breed.trim() : null;
        const age = typeof req.query.age === "string" ? req.query.age.trim() : null;

        const dogs = await searchDogs({ breed, age, limit : 24});
        res.json(dogs);
    } catch (err) {
        console.error(err);
        res.status(500).json({ ok: false, message: err.message });
    }
})

// POST /dogs/sync
// Syncs dogs from the API
router.post('/sync', async (req, res) => {
    try {
        const start = Number(req.body?.start ?? 0);
        const limit = Number(req.body?.limit ?? 24);

        const result = await syncDogsFromApi({ apiKey: API_KEY, start, limit });
        res.json({ ok: true, message: `Synced ${result} dogs from API` });
    } catch (err) {
        console.error(err);
        res.status(500).json({ ok: false, message: err.message });
    }
});

export default router;

