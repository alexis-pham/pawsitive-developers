# 🚀 Pawsitive Developers 
React (Frontend) + Node.js (Backend)

This project consists of:

- **Frontend:** React (Vite)
- **Backend:** Node.js + Express
- Both run locally using `npm run dev`

---

## 📦 Prerequisites

Make sure you have installed:

- **Node.js** (v18+ recommended)  
- **npm** (comes with Node)

Check your versions:

```bash
node -v
npm -v
```

## Start the backend
```bash
cd backend
npm install
npm run dev
```

Open another terminal
## Start the frontend
```bash
cd frontend
npm install
npm run dev
```


## Project Structure
```bash
project-root/
│
├── backend/
│   ├── routes/
│   ├── services/
│   ├── config/
│   ├── index.js
│   ├── package.json
│
├── frontend/
│   ├── src/
│   ├── package.json
│
└── README.md
```

# For database setup
1. Create a database in postgres called dogpsDB
2. Inside of the database folder, create a .env that has DATABASE_URL=postgres://YOUR_USERNAME:YOUR_PASSWORD@localhost:5432/dogpsDB
3. Inside of the backend folder, add to your existing .env (currently has API KEY) and add this same thing DATABASE_URL=postgres://YOUR_USERNAME:YOUR_PASSWORD@localhost:5432/dogpsDB
4. Make sure to run npm i in both database and backend folders, as some packages have been added.
5. CD into the database folder. Run "node migrate.js". This will create the database locally in Postgres.
6. Next, I need to fix this still. But for now, first run the backend server. Then, in Postman run a POST request with the URL "http://localhost:3001/dogs/sync". This will populate the DB with the API data.
7. You should be set up now! Please update this if there was a step that I missed.