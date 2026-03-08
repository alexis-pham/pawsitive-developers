import fs from "fs";
import path from "path"; 
import { pool } from "./db.js";
import { syncDogsFromApi } from "../backend/services/dogService.js";
import 'dotenv/config';

const migrationsDir = path.join(process.cwd(), "migrations");
const API_KEY = process.env.DOG_API_KEY;


// This will populate our database by running all of the SQL scripts in the migrations folder
async function runMigrations() {
    const files = fs.readdirSync(migrationsDir)
        .filter(f => f.endsWith(".sql"))
        .sort();

    console.log("Running migrations...");
    for (const file of files) {
        console.log(`Applying migration: ${file}`);
        const sql = fs.readFileSync(path.join(migrationsDir, file), "utf-8");
        try {
            await pool.query(sql);
            console.log(`Migration ${file} applied successfully.`);
        } catch (err) {
            console.error(`Error applying migration ${file}:`, err);
            process.exit(1);
        }
    }

    const syncDB = async () => {
        console.log(`Seeding DB with dogs!`);
        try {
            await syncDogsFromApi({ apiKey: API_KEY, start: 0, limit: 500});
            console.info(`Successfully updated database with new dogs`);
        } catch (err) {
            console.error("Error syncing dogs to database:", err);
        }
    }
    syncDB();

    console.log("All migrations have been applied.");
    await pool.end();
}

runMigrations();