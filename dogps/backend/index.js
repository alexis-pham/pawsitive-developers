import express from "express";
import cors from "cors";
import dogRouter from "./routes/dogRoutes.js";
import authRouter from "./routes/authRoutes.js";

// Create app instance
const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/dogs', dogRouter);
app.use('/auth', authRouter);

app.get("/api/health", (req, res) => {
    res.json({ ok : true });
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));