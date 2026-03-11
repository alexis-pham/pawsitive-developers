import { pool } from "../db.js";

// This function will upsert the API dogs into Potgres
export async function upsertDogs(dogs) {
    if (!dogs.length) return 0;

    const cols = [
          // Core listing info
          "animalID",
          "animalName",
          "animalStatus",
          "animalAdoptionFee",
          "animalPrimaryBreed",
          "animalSex",
          "animalGeneralAge",
          "animalGeneralSizePotential",
          "animalSizeCurrent",
          "animalSizeUOM",
          "animalColor",
          "animalDescriptionPlain",
          "animalThumbnailUrl",
          "animalPictures",
          "animalUrl",
          "animalBirthdate",

          // Compatibility / filtering
          "animalOKWithKids",
          "animalOKWithDogs",
          "animalOKWithCats",
          "animalHousetrained",
          "animalAltered",
          "animalActivityLevel",
          "animalEnergyLevel",
          "animalLocation",
          "animalCity",
          "animalState",

          // Special needs
          "animalSpecialneeds",
          "animalSpecialneedsDescription",
          "animalNeedsFoster",
          "animalOKForSeniors",
          "animalApartment",

          // Personality traits
          "animalPlayful",
          "animalAffectionate",
          "animalGentle",
          "animalTimid",
          "animalLap",
          "animalIntelligent",
          "animalEagerToPlease",
          "animalGoofy",
          "animalIndependent",
          "animalProtective",
          "animalSkittish",
          "animalObedient",
          "animalFetches",
          "animalSwims",
          "animalPlaysToys",
          "animalGoodInCar",
          "animalCratetrained",
          "animalLeashtrained",

          // more stuff David added
          "fosterEmail",
          "fosterFirstname",
          "fosterLastname",
          "fosterName",
          "fosterPhoneCell",
          "fosterPhoneHome",
          "fosterSalutation",
          "locationAddress",
          "locationCity",
          "locationCountry",
          "locationUrl",
          "locationName",
          "locationPhone",
          "locationState",
          "locationPostalcode"
        ];
    
    const values =[];
    const placeholders = dogs.map((d, i) => {
        const base = i * cols.length;
        values.push(...cols.map(col => d[col]));
        return `(${cols.map((_, j) => `$${base + j + 1}`).join(", ")})`;
    });

    // Create client for the transaction
    const client = await pool.connect();

    try {
        await client.query('BEGIN');

        // 1. Create a staging table that matches your 'dogs' structure
        // 'ON COMMIT DROP' ensures it is automatically deleted after the transaction
        await client.query(`
            CREATE TEMP TABLE dogs_staging 
            ON COMMIT DROP 
            AS SELECT * FROM dogs WHERE FALSE
        `);

        // 2. Remove the auto-incrementing ID column from staging so it doesn't error on NULL
        await client.query(`ALTER TABLE dogs_staging DROP COLUMN IF EXISTS id`);

        // 2. Bulk Insert all dogs into the staging table
        const insertStagingQuery = `
            INSERT INTO dogs_staging ("${cols.join('", "')}") 
            VALUES ${placeholders.join(", ")}
        `;
        await client.query(insertStagingQuery, values);

        // 3. Update existing records (match only on animalID)
        const updateQuery = `
            UPDATE dogs d
            SET ${cols.filter(c => c !== "animalID").map(c => `"${c}" = s."${c}"`).join(", ")}
            FROM (
                SELECT DISTINCT ON ("animalID") * 
                FROM dogs_staging
                ORDER BY "animalID"
            ) s
            WHERE d."animalID" = s."animalID"
        `;
        await client.query(updateQuery);

        // 4. Insert new records, skipping any whose description already exists
        const insertQuery = `
            INSERT INTO dogs ("${cols.join('", "')}")
            SELECT DISTINCT ON ("animalDescriptionPlain") "${cols.join('", "')}"
            FROM dogs_staging s
            WHERE NOT EXISTS (
                SELECT 1 FROM dogs d 
                WHERE d."animalID" = s."animalID"
            )
            ORDER BY "animalDescriptionPlain", "animalID"
            ON CONFLICT (md5("animalDescriptionPlain")) DO NOTHING
        `;
        await client.query(insertQuery);


        
        await client.query('COMMIT');
        console.log('Successfully processed records.');
    } catch (e) {
        await client.query('ROLLBACK');
        console.error('Transaction failed, rolled back:', e);
        throw e;
    } finally {
        client.release();
    }

    return dogs.length;
}   

// Match dogs by survey answers, ranked by how many criteria each dog satisfies
export async function matchDogsBySurvey({ breed = null, age = null, size = null, hasKids = false, hasDogs = false, hasCats = false, activityLevel = null, housingType = null, limit = 50 }) {
    let activityTerm = null;
    if (activityLevel) {
        const l = activityLevel.toLowerCase();
        if (l.includes("low"))           activityTerm = "Low";
        else if (l.includes("moderate")) activityTerm = "Moderate";
        else if (l.includes("high"))     activityTerm = "High";
    }
    const needsApartment = housingType === "Apartment" || housingType === "Condo";

    // Hard filters: breed, age, size (null = no filter)
    // Lifestyle criteria are scored — dogs matching more criteria rank higher
    const query = `
        SELECT d.*, COALESCE(s.adopted, FALSE) AS adopted,
          (
            (CASE WHEN $4  AND d."animalOKWithKids"   ILIKE '%yes%' THEN 1 ELSE 0 END) +
            (CASE WHEN $5  AND d."animalOKWithDogs"   ILIKE '%yes%' THEN 1 ELSE 0 END) +
            (CASE WHEN $6  AND d."animalOKWithCats"   ILIKE '%yes%' THEN 1 ELSE 0 END) +
            (CASE WHEN $7::text IS NOT NULL AND d."animalActivityLevel" ILIKE '%' || $7 || '%' THEN 1 ELSE 0 END) +
            (CASE WHEN $8  AND d."animalApartment"    ILIKE '%yes%' THEN 1 ELSE 0 END)
          ) AS match_score
        FROM dogs d
        LEFT JOIN dog_status s ON s.dog_id = d.id
        WHERE
            ($1::text IS NULL OR d."animalPrimaryBreed"        ILIKE '%' || $1 || '%')
            AND ($2::text IS NULL OR d."animalGeneralAge"          ILIKE '%' || $2 || '%')
            AND ($3::text IS NULL OR d."animalGeneralSizePotential" ILIKE '%' || $3 || '%')
        ORDER BY match_score DESC, d.last_seen_at DESC
        LIMIT $9
    `;

    const { rows } = await pool.query(query, [
        breed, age, size,
        hasKids, hasDogs, hasCats,
        activityTerm,
        needsApartment,
        limit,
    ]);

    if (rows.length > 0) return rows;

    // Fallback: drop breed/age/size filters too, return top scored dogs
    const fallback = `
        SELECT d.*, COALESCE(s.adopted, FALSE) AS adopted,
          (
            (CASE WHEN $1  AND d."animalOKWithKids"   ILIKE '%yes%' THEN 1 ELSE 0 END) +
            (CASE WHEN $2  AND d."animalOKWithDogs"   ILIKE '%yes%' THEN 1 ELSE 0 END) +
            (CASE WHEN $3  AND d."animalOKWithCats"   ILIKE '%yes%' THEN 1 ELSE 0 END) +
            (CASE WHEN $4::text IS NOT NULL AND d."animalActivityLevel" ILIKE '%' || $4 || '%' THEN 1 ELSE 0 END) +
            (CASE WHEN $5  AND d."animalApartment"    ILIKE '%yes%' THEN 1 ELSE 0 END)
          ) AS match_score
        FROM dogs d
        LEFT JOIN dog_status s ON s.dog_id = d.id
        ORDER BY match_score DESC, d.last_seen_at DESC
        LIMIT $6
    `;
    const { rows: fallbackRows } = await pool.query(fallback, [
        hasKids, hasDogs, hasCats, activityTerm, needsApartment, limit,
    ]);
    return fallbackRows;
}

// Search dogs from the database
export async function searchDogs({ breed = null, age = null, city = null, state = null, limit = 50 }) {
    const query = `
        SELECT d.*, COALESCE(s.adopted, FALSE) AS adopted
        FROM dogs d
        LEFT JOIN dog_status s ON s.dog_id = d.id
        WHERE
            ($1::text IS NULL or d."animalPrimaryBreed" ILIKE '%' || $1 || '%')
            AND ($2::text IS NULL or d."animalGeneralAge" ILIKE '%' || $2 || '%')
            AND ($3::text IS NULL OR d."animalCity" = $3)
            AND ($4::text IS NULL OR d."animalState" = $4)
        ORDER BY d.last_seen_at DESC
        LIMIT $5
    `;

    const {rows} = await pool.query(query, [breed, age, city ? city.trim() : null, state ? state.trim().toUpperCase() : null,limit]);
    return rows;
}


