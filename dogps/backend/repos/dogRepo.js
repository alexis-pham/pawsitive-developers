import { pool } from "../db.js";

// This function will upsert the API dogs into Potgres
export async function upsertDogs(dogs) {
    if (!dogs.length) return 0;

    const cols = ["external_id", "name", "breed", "age", "last_seen_at"];
    
    const values =[];
    const placeholders = dogs.map((d, i) => {
        const base = i * cols.length;
        values.push(d.external_id, d.name, d.breed, d.age, new Date());
        return `(${cols.map((_, j) => `$${base + j + 1}`).join(", ")})`;
    });

    const query = `
        INSERT INTO dogs (${cols.join(",")})
        VALUES ${placeholders.join(", ")}
        ON CONFLICT (external_id) DO UPDATE SET
            name = EXCLUDED.name,
            breed = EXCLUDED.breed,
            age = EXCLUDED.age,
            last_seen_at = EXCLUDED.last_seen_at
    `;

    await pool.query(query, values);
    return dogs.length;
}   

// Search dogs from the database
export async function searchDogs({ breed = null, age = null, limit = 24 }) {
    const query = `
        SELECT d.*, COALESCE(s.adopted, FALSE) AS adopted
        FROM dogs d
        LEFT JOIN dog_status s ON s.dog_id = d.id
        WHERE
            ($1::text IS NULL or d.breed ILIKE '%' || $1 || '%')
            AND ($2::text IS NULL or d.age ILIKE '%' || $2 || '%')
        ORDER BY d.last_seen_at DESC
        LIMIT $3
    `;

    const {rows} = await pool.query(query, [breed, age, limit]);
    return rows;
}


