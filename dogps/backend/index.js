import express from "express";
import cors from "cors";
import dogRouter from "./routes/dogRoutes.js";
import authRouter from "./routes/authRoutes.js";
import { registerDogCron } from "./services/updateDbCron.js";
import "dotenv/config"

// Pull api key
const API_KEY = process.env.DOG_API_KEY;

// Create app instance
const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/dogs', dogRouter);
app.use('/auth', authRouter);

// Start cron job to update database with dogs
registerDogCron(API_KEY);

app.get("/api/health", (req, res) => {
    res.json({ ok : true });
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));