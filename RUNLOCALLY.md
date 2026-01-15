# Running TaskFlow Locally

A quick guide for getting TaskFlow running on your machine.

---

## Prerequisites

Make sure you have these installed:

```bash
# Check Node.js (need v20+)
node --version

# Check PostgreSQL (need v14+)
psql --version
```

**Don't have them?**
```bash
# macOS with Homebrew
brew install node
brew install postgresql@14
brew services start postgresql@14
```

---

## Step 1: Set Up Database

```bash
# Create the database
createdb taskflow

# Create tables
psql -d taskflow -f database/schema.sql

# Add sample data (optional but recommended)
psql -d taskflow -f database/seeds.sql
```

**Verify it worked:**
```bash
psql -d taskflow -c "SELECT * FROM users;"
# Should show: demo@taskflow.com
```

---

## Step 2: Set Up Backend

```bash
# Go to backend folder
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

**Edit `.env`** - Update `DB_USER` to your PostgreSQL username:
```env
DB_USER=your_username_here
```

> **Tip:** On macOS with Homebrew, your username is usually your Mac username (run `whoami` to check)

---

## Step 3: Set Up Frontend

```bash
# Go to frontend folder (from project root)
cd frontend

# Install dependencies
npm install
```

---

## Step 4: Start the App

You need **two terminal windows**:

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```
You should see:
```
✓ Connected to PostgreSQL database
Server running on http://localhost:3001
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```
You should see:
```
VITE ready in 500ms
➜ Local: http://localhost:5173/
```

---

## Step 5: Open the App

1. Open your browser
2. Go to **http://localhost:5173**
3. Login with demo account:
   - Email: `demo@taskflow.com`
   - Password: `password123`

---

## Stopping Everything

### Stop the Servers

In each terminal where a server is running, press:
```
Ctrl + C
```

This gracefully stops the process.

### Stop All Node Processes (Nuclear Option)

If terminals are closed or unresponsive:
```bash
# Kill backend (port 3001)
lsof -ti:3001 | xargs kill

# Kill frontend (port 5173)
lsof -ti:5173 | xargs kill

# Or kill ALL node processes (careful!)
pkill -f node
```

### Stop PostgreSQL (Optional)

Usually you don't need to stop the database, but if you want to:
```bash
# macOS with Homebrew
brew services stop postgresql@14

# Start it again later
brew services start postgresql@14
```

---

## Common Commands Cheat Sheet

| What | Command |
|------|---------|
| Start backend | `cd backend && npm run dev` |
| Start frontend | `cd frontend && npm run dev` |
| Stop a server | `Ctrl + C` in that terminal |
| Kill port 3001 | `lsof -ti:3001 \| xargs kill` |
| Kill port 5173 | `lsof -ti:5173 \| xargs kill` |
| View database | `psql -d taskflow` |
| List all tasks | `psql -d taskflow -c "SELECT * FROM tasks;"` |
| Reset database | `psql -d taskflow -f database/schema.sql` |
| Install new package (backend) | `cd backend && npm install package-name` |
| Install new package (frontend) | `cd frontend && npm install package-name` |

---

## Troubleshooting

### "Database connection failed"
- Make sure PostgreSQL is running: `brew services start postgresql@14`
- Check your `DB_USER` in `backend/.env`

### "Port 3001 already in use"
- Kill the process: `lsof -ti:3001 | xargs kill`
- Or change port in `backend/.env`

### "Port 5173 already in use"
- Kill the process: `lsof -ti:5173 | xargs kill`

### "Module not found"
- Run `npm install` in the folder with the error

### "CORS error in browser"
- Make sure backend is running on port 3001
- Check that frontend `.env` has `VITE_API_URL=http://localhost:3001/api`

---

## Project Structure (Quick Overview)

```
TaskFlow/
├── frontend/          ← React app (what users see)
│   └── src/
│       ├── pages/     ← Login, Dashboard, TaskForm
│       └── components/← Reusable UI pieces
│
├── backend/           ← Express API (handles data)
│   └── src/
│       ├── routes/    ← URL endpoints
│       ├── controllers/← Business logic
│       └── models/    ← Database queries
│
└── database/          ← SQL files
    ├── schema.sql     ← Table definitions
    └── seeds.sql      ← Sample data
```

---

## Need Help?

1. Check the error message carefully
2. Make sure both servers are running
3. Check the browser console (F12 → Console)
4. Check the backend terminal for errors

Happy coding! 🚀
