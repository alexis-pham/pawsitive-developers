# 🚀 Pawsitive Developers 
Next.js (Frontend) + Node.js (Backend) + PostgreSQL (Database)

---

## 📦 Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running
- [Node.js](Node.js)

## Running the App

1. Clone the repository
2. From the project root, run:
```bash
cd dogps
```

3. Create three terminal instances

4. Change directory into the frontend, backend and database in these three terminals. Then run "npm i" in each terminal.

Terminal 1
```bash
cd frontend
npm i
```

Terminal 2
```bash
cd backend
npm i
```

Terminal 3
```bash
cd database
npm i
```

4. Start the database using Docker by running this command in the terminal, then run the migration script to seed the database with data. You may need to wait for 30-45 seconds for the migrate script to finish, do not Ctrl-C

In Terminal 3
```bash
docker compose up -d
node migrate.js
```

5. Next, start the backend and frontend using "npm run dev" in each terminal:

In Terminal 1
```bash
npm run dev
```

In Terminal 2
```bash
npm run dev
```

6. The app should be up and running! Navigate to the frontend URL to view: http://localhost:3000

Once running:
- Frontend: http://localhost:3000
- Backend: http://localhost:3001

## Stopping the App
Run the command Ctrl-C in the 1st and 2nd terminal to kill the frontend and backend.
```bash
Ctrl-C
```

In the Database, Terminal 3 run:
```bash
docker compose down
```

OR to remove the volume (drop the database data):
```bash
docker compose down -v
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
├── database/
│   ├── migrations/
│   ├── package.json
│
└── README.md
```