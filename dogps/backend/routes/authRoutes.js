import express from 'express';
import { OAuth2Client } from 'google-auth-library';
import dotenv from 'dotenv';
import { pool } from '../db.js';

dotenv.config();

const router = express.Router();

const client = new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    'http://localhost:5173/callback'
);

router.post('/callback', async (request, response) => {
    const { code } = request.body;

    try {
        // Exchange code for tokens
        const { tokens } = await
        client.getToken(code);

        // Verify and decode the ID token to get user info
        const ticket = await client.verifyIdToken({
            idToken: tokens.id_token,
            audience: process.env.GOOGLE_CLIENT_ID,
        });

        const payload = ticket.getPayload();

        try {
            await pool.query(
                `INSERT INTO users (email, name)
                VALUES ($1, $2)`, [payload.email, payload.name]
            );
            console.info(`User table updated sucessfully`);
        } catch (err) {
            console.error("Error creating user", err);
        }

        // Return user info and token
        response.json({
            user: {
                email: payload.email,
                name: payload.name,
                picture: payload.picture,
            },
            token: tokens.id_token,
        });
    } catch (error) {
        console.log(error);
    }
});

export default router;