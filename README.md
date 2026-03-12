# 🚀 Pawsitive Developers 
Next.js (Frontend) + Node.js (Backend) + PostgreSQL (Database)

---

## 📦 Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running

## Running the App

1. Clone the repository
2. From the project root, run:
```bash
cd dogps
docker compose up --build
```

3. Wait for all services to start (the initial build takes a few minutes)

Once running:
- Frontend: http://localhost:3000
- Backend: http://localhost:3001

## Stopping the App
```bash
docker compose down
```

To fully reset the database:
```bash
docker compose down -v
docker compose up --build
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