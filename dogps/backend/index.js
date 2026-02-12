import express from "express";
import cors from "cors";
import dogRouter from "./routes/dogRoutes.js";

// Create app instance
const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/dogs', dogRouter);

const dogs = [
    { id: 1, name: "Buddy", breed: "Golden Retriever", age: 3 },
    { id: 2, name: "Max", breed: "Labrador Retriever", age: 5 },
    { id: 3, name: "Bella", breed: "German Shepherd", age: 2 },
]

app.get("/api/health", (req, res) => {
    res.json({ ok : true });
});

app.get("/api/dogs", (req, res) => {
    res.json(dogs);
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));