import express from "express";
const router = express.Router();
import "dotenv/config"
import { syncDogsFromApi } from "../services/dogService.js";
import { searchDogs } from "../repos/dogRepo.js";
import { pool } from "../db.js";

const API_KEY = process.env.DOG_API_KEY;

// GET /dogs?breed=&age=
router.get('/', async (req, res) => {
    try {
        const breed = typeof req.query.breed === "string" ? req.query.breed.trim() : null;
        const age = typeof req.query.age === "string" ? req.query.age.trim() : null;

        const dogs = await searchDogs({ breed, age, limit : 50});
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
        const limit = Number(req.body?.limit ?? 500);

        const result = await syncDogsFromApi({ apiKey: API_KEY, start, limit });
        res.json({ ok: true, message: `Fetched ${result.fetched} and synced ${result.upserted} dogs from API` });
    } catch (err) {
        console.error(err);
        res.status(500).json({ ok: false, message: err.message });
    }
});

router.post('/favorites', async (req, res) => {
    const { userEmail, dogId } = req.body;
    try {
        await pool.query(
            `INSERT INTO dog_user_favorites (dog_id, user_id)
             SELECT $1, id
             FROM users
             WHERE email = $2
             ON CONFLICT DO NOTHING`, [dogId, userEmail]
        );
        console.info(`Favorite inserted successfully`);
        res.status(200).json({ message: "Success" });
    } catch (err) {
        console.error("Error inserting favorite", err);
        res.status(500).json({ error: "Failed to insert favorite" });
    }
});

router.delete('/favorites', async (req, res) => {
    const { userEmail, dogId } = req.body;

    try {
        await pool.query(
            `DELETE FROM dog_user_favorites
             WHERE dog_id = $1
             AND user_id = (SELECT id FROM users WHERE email = $2)`,
            [dogId, userEmail]
        );
        console.info(`Favorite removed successfully`);
        res.status(200).json({ message: "Success" });
    } catch (err) {
        console.error("Error removing favorite", err);
        res.status(500).json({ error: "Failed to remove favorite" });
    }
});

router.get('/favorites', async (req, res) => {
    const userEmail = req.query.userEmail;

    try {
        const result = await pool.query(
        `SELECT d.id, d."animalName", d."animalThumbnailUrl", d."animalPrimaryBreed", d."animalGeneralAge"
        FROM dogs d
        JOIN dog_user_favorites f ON f.dog_id = d.id
        JOIN users u ON u.id = f.user_id
        WHERE u.email = $1`,
        [userEmail]
        );

        const dogs = result.rows;
        res.status(200).json({ dogs: dogs });
    } catch(err) {
        console.error("Error fetching favorites", err);
    }
});

export default router;