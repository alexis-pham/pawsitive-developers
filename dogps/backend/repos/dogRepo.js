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
          "animalLeashtrained"
        ];
    
    const values =[];
    const placeholders = dogs.map((d, i) => {
        const base = i * cols.length;
        values.push(...cols.map(col => d[col]));
        return `(${cols.map((_, j) => `$${base + j + 1}`).join(", ")})`;
    });

    const updateCols = cols.filter(col => col !== "animalID")
        .map(col => `"${col}" = EXCLUDED."${col}"`)
        .join(",\n  ");

    const query = `
        INSERT INTO dogs (${cols.map( c => `"${c}"`).join(",")})
        VALUES ${placeholders.join(", ")}
        ON CONFLICT ("animalID") DO UPDATE SET
            ${updateCols}
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


