import express from "express";
const router = express.Router();
import { pool } from "../db.js";

// Helper — converts frontend string values to proper DB booleans
// "Yes" → true, "No" → false, anything else (null / "Prefer not to say") → null
function toDbBool(val) {
  if (val === true  || val === "Yes") return true;
  if (val === false || val === "No")  return false;
  return null;
}

// GET /survey?userEmail=
router.get("/", async (req, res) => {
  const userEmail = req.query.userEmail;
  if (!userEmail) return res.status(400).json({ error: "userEmail is required" });

  try {
    const result = await pool.query(
      `SELECT
         survey_living_situation,
         survey_activity_level,
         survey_has_kids,
         survey_has_dogs,
         survey_has_cats,
         survey_housing_type,
         survey_dog_size,
         survey_dog_age,
         survey_dog_breed,
         survey_completed_at
       FROM users
       WHERE email = $1`,
      [userEmail]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    const row = result.rows[0];

    if (!row.survey_completed_at) {
      return res.json({ completed: false });
    }

    return res.json({
      completed: true,
      answers: {
        living_situation: row.survey_living_situation,
        activity_level:   row.survey_activity_level,
        // Return booleans as-is — the frontend normalises them back to strings
        has_kids:         row.survey_has_kids,
        has_dogs:         row.survey_has_dogs,
        has_cats:         row.survey_has_cats,
        housing_type:     row.survey_housing_type,
        dog_size:         row.survey_dog_size,
        dog_age:          row.survey_dog_age,
        dog_breed:        row.survey_dog_breed,
      },
    });
  } catch (err) {
    console.error("GET /survey error:", err);
    res.status(500).json({ error: "Failed to fetch survey" });
  }
});

// POST /survey
router.post("/", async (req, res) => {
  const { userEmail, answers } = req.body;
  if (!userEmail || !answers) {
    return res.status(400).json({ error: "userEmail and answers are required" });
  }

  try {
    await pool.query(
      `UPDATE users SET
         survey_living_situation = $1,
         survey_activity_level   = $2,
         survey_has_kids         = $3,
         survey_has_dogs         = $4,
         survey_has_cats         = $5,
         survey_housing_type     = $6,
         survey_dog_size         = $7,
         survey_dog_age          = $8,
         survey_dog_breed        = $9,
         survey_completed_at     = NOW()
       WHERE email = $10`,
      [
        answers.living_situation ?? null,
        answers.activity_level   ?? null,
        toDbBool(answers.has_kids),
        toDbBool(answers.has_dogs),
        toDbBool(answers.has_cats),
        answers.housing_type ?? null,
        answers.dog_size     ?? null,
        answers.dog_age      ?? null,
        answers.dog_breed    || null,
        userEmail,
      ]
    );

    res.json({ ok: true });
  } catch (err) {
    console.error("POST /survey error:", err);
    res.status(500).json({ error: "Failed to save survey" });
  }
});

// DELETE /survey — reset all survey columns to NULL
router.delete("/", async (req, res) => {
  const { userEmail } = req.body;
  if (!userEmail) return res.status(400).json({ error: "userEmail is required" });

  try {
    await pool.query(
      `UPDATE users SET
         survey_living_situation = NULL,
         survey_activity_level   = NULL,
         survey_has_kids         = NULL,
         survey_has_dogs         = NULL,
         survey_has_cats         = NULL,
         survey_housing_type     = NULL,
         survey_dog_size         = NULL,
         survey_dog_age          = NULL,
         survey_dog_breed        = NULL,
         survey_completed_at     = NULL
       WHERE email = $1`,
      [userEmail]
    );

    res.json({ ok: true });
  } catch (err) {
    console.error("DELETE /survey error:", err);
    res.status(500).json({ error: "Failed to reset survey" });
  }
});

export default router;