import express from "express";
const router = express.Router();
import { getAdoptableDogs } from "../services/dogService.js";

router.get('/', async (req, res) => {
    const dogs = await getAdoptableDogs({ limit: 30 });
    res.send(dogs);
})

export default router;

