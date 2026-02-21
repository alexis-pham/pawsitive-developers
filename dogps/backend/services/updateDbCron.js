import cron from 'node-cron';
import { syncDogsFromApi } from './dogService.js';

export function registerDogCron(API_KEY) {
    if (!API_KEY) {
        throw new Error("DOG_API_KEY is not defined in environment variables");
    }

    cron.schedule('0 0 * * SUN', 
        async () => {
            const start = 0;
            const limit = 1000; // TODO: Handle proper dynamic pagination
            try {
                await syncDogsFromApi({ apiKey: API_KEY, start, limit });
                console.info(`Successfully updated database with new dogs`);
            } catch (err) {
                console.error("Error syncing dogs to database:", err);
            }
        },
        {
            timezone: "America/Los_Angeles",
        }
    );
    console.info("DB syncing cron job registered...");
};
