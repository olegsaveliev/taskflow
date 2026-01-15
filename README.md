<![CDATA[<div align="center">

# ✅ TaskFlow

**A modern, full-stack task management application with a playful, hand-drawn aesthetic.**

[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-20+-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14+-4169E1?logo=postgresql&logoColor=white)](https://www.postgresql.org/)

[Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [User Guide](docs/USER_GUIDE.md) • [API Documentation](#-api-documentation) • [Contributing](#-contributing)

</div>

---

## 📸 Screenshots

<div align="center">

| Login | Dashboard |
|:-----:|:---------:|
| *Screenshot placeholder* | *Screenshot placeholder* |

| Task Form | Mobile View |
|:---------:|:-----------:|
| *Screenshot placeholder* | *Screenshot placeholder* |

</div>

> 💡 **Tip:** Add your screenshots to a `/docs/screenshots/` folder and update the paths above.

---

## ✨ Features

- 🔐 **User Authentication** — Secure registration, login, and logout with JWT
- ✏️ **Full CRUD Operations** — Create, read, update, and delete tasks
- ✅ **Status Tracking** — Mark tasks as complete/incomplete with one click
- 🎯 **Priority Levels** — Assign Low, Medium, or High priority with color-coded badges
- 🔍 **Smart Filtering** — Filter tasks by status (All, Pending, Completed)
- 📅 **Due Dates** — Set deadlines with overdue indicators
- 🎨 **Playful UI** — Hand-drawn aesthetic with sketch-style components
- 📱 **Responsive Design** — Works beautifully on desktop and mobile
- ⚡ **Real-time Counts** — Task counters update instantly across all filters

---

## 🛠 Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| [React 18](https://reactjs.org/) | UI library |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [React Router 6](https://reactrouter.com/) | Client-side routing |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [Axios](https://axios-http.com/) | HTTP client |

### Backend
| Technology | Purpose |
|------------|---------|
| [Node.js 20+](https://nodejs.org/) | JavaScript runtime |
| [Express.js](https://expressjs.com/) | Web framework |
| [PostgreSQL 14+](https://www.postgresql.org/) | Relational database |
| [JWT](https://jwt.io/) | Authentication tokens |
| [bcrypt](https://www.npmjs.com/package/bcrypt) | Password hashing |

### Dev Tools
| Tool | Purpose |
|------|---------|
| [nodemon](https://nodemon.io/) | Auto-restart on changes |
| [Docker](https://www.docker.com/) | Containerization (optional) |

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

| Requirement | Version | Check Command |
|-------------|---------|---------------|
| Node.js | 20.x or higher | `node --version` |
| npm | 10.x or higher | `npm --version` |
| PostgreSQL | 14.x or higher | `psql --version` |

### Installing Prerequisites

**macOS (using Homebrew):**
```bash
# Install Node.js
brew install node

# Install PostgreSQL
brew install postgresql@14
brew services start postgresql@14
```

**Ubuntu/Debian:**
```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PostgreSQL
sudo apt-get install postgresql-14
```

**Windows:**
- Download Node.js from [nodejs.org](https://nodejs.org/)
- Download PostgreSQL from [postgresql.org](https://www.postgresql.org/download/windows/)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/olegsaveliev/taskflow.git
cd taskflow
```

### 2. Set Up the Database

```bash
# Create the database
createdb taskflow

# Run the schema migration
psql -d taskflow -f database/schema.sql

# (Optional) Load sample data
psql -d taskflow -f database/seeds.sql
```

**Verify the setup:**
```bash
psql -d taskflow -c "SELECT * FROM users;"
# Should show: demo@taskflow.com
```

### 3. Set Up the Backend

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

**Edit `backend/.env`** with your database credentials:
```env
DB_USER=your_postgres_username
DB_PASSWORD=your_postgres_password
```

> 💡 **Tip:** On macOS with Homebrew, your username is usually your Mac username (run `whoami` to check).

### 4. Set Up the Frontend

```bash
# Navigate to frontend directory (from project root)
cd frontend

# Install dependencies
npm install

# Create environment file (optional, defaults work for local dev)
cp .env.example .env
```

### 5. Start the Application

**Terminal 1 — Backend:**
```bash
cd backend
npm run dev
```
You should see:
```
✓ Connected to PostgreSQL database
Server running on http://localhost:3001
```

**Terminal 2 — Frontend:**
```bash
cd frontend
npm run dev
```
You should see:
```
VITE ready in 500ms
➜ Local: http://localhost:5173/
```

### 6. Open the App

🎉 Visit **http://localhost:5173** in your browser!

**Demo Credentials:**
- Email: `demo@taskflow.com`
- Password: `password123`

---

## ⚙️ Environment Variables

### Backend (`backend/.env`)

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `3001` |
| `NODE_ENV` | Environment mode | `development` |
| `DB_HOST` | Database host | `localhost` |
| `DB_PORT` | Database port | `5432` |
| `DB_NAME` | Database name | `taskflow` |
| `DB_USER` | Database username | `postgres` |
| `DB_PASSWORD` | Database password | `your_password` |
| `JWT_SECRET` | Secret for JWT signing | `your_secret_key` |
| `JWT_EXPIRES_IN` | Token expiration | `7d` |

### Frontend (`frontend/.env`)

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API URL | `http://localhost:3001/api` |

---

## 📡 API Documentation

### Base URL
```
http://localhost:3001/api
```

### Authentication Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:-------------:|
| `POST` | `/auth/register` | Create new account | ❌ |
| `POST` | `/auth/login` | Login user | ❌ |
| `POST` | `/auth/logout` | Logout user | ❌ |
| `GET` | `/auth/me` | Get current user | ✅ |

### Task Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:-------------:|
| `GET` | `/tasks` | Get all tasks | ✅ |
| `GET` | `/tasks?status=pending` | Filter by status | ✅ |
| `POST` | `/tasks` | Create new task | ✅ |
| `GET` | `/tasks/:id` | Get task by ID | ✅ |
| `PUT` | `/tasks/:id` | Update task | ✅ |
| `DELETE` | `/tasks/:id` | Delete task | ✅ |
| `PATCH` | `/tasks/:id/status` | Toggle task status | ✅ |

### Example Requests

**Create a Task:**
```bash
curl -X POST http://localhost:3001/api/tasks \
  -H "Content-Type: application/json" \
  -b cookies.txt \
  -d '{
    "title": "Buy groceries",
    "description": "Milk, eggs, bread",
    "priority": "medium",
    "due_date": "2026-01-20"
  }'
```

**Response:**
```json
{
  "success": true,
  "data": {
    "task": {
      "id": 1,
      "title": "Buy groceries",
      "description": "Milk, eggs, bread",
      "status": "pending",
      "priority": "medium",
      "due_date": "2026-01-20",
      "created_at": "2026-01-15T10:30:00Z"
    }
  }
}
```

### Health Check

```bash
curl http://localhost:3001/api/health
```

---

## 📁 Project Structure

```
TaskFlow/
├── frontend/                 # React application
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   │   ├── illustrations/  # SVG illustration components
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── TaskCard.jsx
│   │   │   ├── TaskFilter.jsx
│   │   │   └── TaskList.jsx
│   │   ├── context/          # React Context (AuthContext)
│   │   ├── pages/            # Page components
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── TaskForm.jsx
│   │   ├── services/         # API service layer
│   │   ├── App.jsx           # Root component with routing
│   │   └── index.css         # Global styles & animations
│   ├── .env.example
│   └── package.json
│
├── backend/                  # Express API
│   ├── src/
│   │   ├── config/           # Database configuration
│   │   ├── controllers/      # Route handlers
│   │   ├── middleware/       # Auth & error handling
│   │   ├── models/           # Database queries
│   │   ├── routes/           # API route definitions
│   │   └── server.js         # Entry point
│   ├── .env.example
│   └── package.json
│
├── database/                 # SQL files
│   ├── schema.sql            # Table definitions
│   └── seeds.sql             # Sample data
│
├── docker-compose.yml        # Docker orchestration
├── CONTRIBUTING.md           # Contribution guidelines
├── LICENSE                   # MIT License
├── PROGRESS.md               # Implementation tracking
├── RUNLOCALLY.md             # Quick start guide
└── README.md                 # This file
```

---

## 🐳 Docker Deployment

For production deployment using Docker:

```bash
# Build and start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down
```

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details on:

- 🐛 How to report bugs
- 💡 How to suggest features
- 🔀 Pull request process

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Design inspiration from hand-drawn UI aesthetics
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first approach
- [Caveat](https://fonts.google.com/specimen/Caveat) & [DM Sans](https://fonts.google.com/specimen/DM+Sans) fonts

---

<div align="center">

**Made with ❤️ and ☕**

[⬆ Back to Top](#-taskflow)

</div>
]]>