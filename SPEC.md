# TaskFlow - Technical Specification

**Version:** 1.1  
**Last Updated:** January 14, 2026  
**Status:** Implemented

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Technology Stack](#2-technology-stack)
3. [Project Structure](#3-project-structure)
4. [Database Schema](#4-database-schema)
5. [API Specification](#5-api-specification)
6. [Frontend Specification](#6-frontend-specification)
7. [Security Considerations](#7-security-considerations)
8. [Error Handling](#8-error-handling)

---

## 1. Project Overview

### 1.1 Description

TaskFlow is a full-stack task management web application that allows users to create, organize, and track their tasks. The application features user authentication, CRUD operations for tasks, and filtering capabilities.

### 1.2 Core Features

| Feature | Description |
|---------|-------------|
| User Registration | Users can create an account with email and password |
| User Login/Logout | Secure authentication with JWT tokens |
| Create Task | Add new tasks with title, description, due date |
| View Tasks | Display all tasks in a list format |
| Update Task | Edit task details |
| Delete Task | Remove tasks permanently |
| Toggle Status | Mark tasks as complete/incomplete |
| Filter Tasks | Filter by status (all, pending, completed) |

### 1.3 Architecture Overview

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│                 │     │                 │     │                 │
│   React App     │────▶│  Express API    │────▶│   PostgreSQL    │
│   (Frontend)    │◀────│  (Backend)      │◀────│   (Database)    │
│                 │     │                 │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘
     Port 5173              Port 3001              Port 5432
```

---

## 2. Technology Stack

### 2.1 Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.x | UI library |
| Vite | 5.x | Build tool & dev server |
| React Router | 6.x | Client-side routing |
| Axios | 1.x | HTTP client |
| Tailwind CSS | 3.x | Utility-first CSS framework |

### 2.2 Backend

| Technology | Version | Purpose |
|------------|---------|---------|
| Node.js | 20.x | JavaScript runtime |
| Express | 4.x | Web framework |
| pg | 8.x | PostgreSQL client |
| bcrypt | 5.x | Password hashing |
| jsonwebtoken | 9.x | JWT authentication |
| cors | 2.x | Cross-origin resource sharing |
| dotenv | 16.x | Environment variables |

### 2.3 Database

| Technology | Version | Purpose |
|------------|---------|---------|
| PostgreSQL | 14+ | Relational database |

### 2.4 Development Tools

| Tool | Purpose |
|------|---------|
| nodemon | Auto-restart server on changes |
| concurrently | Run multiple commands simultaneously |

---

## 3. Project Structure

### 3.1 Directory Layout

```
TaskFlow/
├── frontend/                    # React application
│   ├── public/
│   │   └── vite.svg
│   ├── src/
│   │   ├── components/          # Reusable UI components
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── TaskCard.jsx
│   │   │   ├── TaskFilter.jsx
│   │   │   └── TaskList.jsx
│   │   ├── context/             # React Context providers
│   │   │   └── AuthContext.jsx
│   │   ├── pages/               # Page components
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── TaskForm.jsx
│   │   ├── services/            # API service layer
│   │   │   ├── api.js
│   │   │   ├── authService.js
│   │   │   └── taskService.js
│   │   ├── App.jsx              # Root component
│   │   ├── index.css            # Global styles & Tailwind
│   │   └── main.jsx             # Entry point
│   ├── .env.example
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── backend/                     # Express application
│   ├── src/
│   │   ├── controllers/         # Route handlers
│   │   │   ├── authController.js
│   │   │   └── taskController.js
│   │   ├── middleware/          # Custom middleware
│   │   │   ├── auth.js
│   │   │   └── errorHandler.js
│   │   ├── models/              # Database queries
│   │   │   ├── userModel.js
│   │   │   └── taskModel.js
│   │   ├── routes/              # Route definitions
│   │   │   ├── authRoutes.js
│   │   │   └── taskRoutes.js
│   │   ├── config/              # Configuration
│   │   │   └── db.js
│   │   └── server.js            # Entry point
│   ├── .env.example
│   └── package.json
│
├── database/                    # Database files
│   ├── schema.sql               # Table definitions
│   └── seeds.sql                # Sample data
│
├── SPEC.md                      # This file
├── IMPLEMENTATION_PLAN.md       # Step-by-step guide
└── README.md                    # Project documentation
```

### 3.2 Configuration Files

#### Frontend `.env.example`

```env
VITE_API_URL=http://localhost:3001/api
```

#### Backend `.env.example`

```env
# Server
PORT=3001
NODE_ENV=development

# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=taskflow
DB_USER=postgres
DB_PASSWORD=your_password_here

# JWT
JWT_SECRET=your_super_secret_jwt_key_change_in_production
JWT_EXPIRES_IN=7d
```

---

## 4. Database Schema

### 4.1 Entity Relationship Diagram

```
┌──────────────────────────┐         ┌──────────────────────────┐
│         users            │         │          tasks           │
├──────────────────────────┤         ├──────────────────────────┤
│ id (PK)         SERIAL   │────────▶│ id (PK)         SERIAL   │
│ email           VARCHAR  │    1:N  │ user_id (FK)    INTEGER  │
│ password_hash   VARCHAR  │         │ title           VARCHAR  │
│ name            VARCHAR  │         │ description     TEXT     │
│ created_at      TIMESTAMP│         │ status          VARCHAR  │
│ updated_at      TIMESTAMP│         │ due_date        DATE     │
└──────────────────────────┘         │ created_at      TIMESTAMP│
                                     │ updated_at      TIMESTAMP│
                                     └──────────────────────────┘
```

### 4.2 Table Definitions

#### 4.2.1 Users Table

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Index for faster email lookups (login)
CREATE INDEX idx_users_email ON users(email);
```

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | SERIAL | PRIMARY KEY | Auto-incrementing unique identifier |
| email | VARCHAR(255) | NOT NULL, UNIQUE | User's email address |
| password_hash | VARCHAR(255) | NOT NULL | Bcrypt hashed password |
| name | VARCHAR(100) | NOT NULL | User's display name |
| created_at | TIMESTAMP | DEFAULT NOW | Account creation timestamp |
| updated_at | TIMESTAMP | DEFAULT NOW | Last update timestamp |

#### 4.2.2 Tasks Table

```sql
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(20) NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'completed')),
    priority VARCHAR(10) NOT NULL DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high')),
    due_date DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for common queries
CREATE INDEX idx_tasks_user_id ON tasks(user_id);
CREATE INDEX idx_tasks_status ON tasks(status);
CREATE INDEX idx_tasks_priority ON tasks(priority);
CREATE INDEX idx_tasks_due_date ON tasks(due_date);
```

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | SERIAL | PRIMARY KEY | Auto-incrementing unique identifier |
| user_id | INTEGER | NOT NULL, FK | Reference to users table |
| title | VARCHAR(255) | NOT NULL | Task title |
| description | TEXT | - | Detailed task description |
| status | VARCHAR(20) | NOT NULL, CHECK | Either 'pending' or 'completed' |
| priority | VARCHAR(10) | NOT NULL, CHECK | Task priority: 'low', 'medium', 'high' |
| due_date | DATE | - | Optional due date |
| created_at | TIMESTAMP | DEFAULT NOW | Task creation timestamp |
| updated_at | TIMESTAMP | DEFAULT NOW | Last update timestamp |

### 4.3 Sample Seed Data

```sql
-- Insert test user (password: "password123")
INSERT INTO users (email, password_hash, name) VALUES
('demo@taskflow.com', '$2b$10$rQZ5K6xyU8bG9qX9D8vY4OqZ5K6xyU8bG9qX9D8vY4O', 'Demo User');

-- Insert sample tasks for user id=1
INSERT INTO tasks (user_id, title, description, status, due_date) VALUES
(1, 'Complete project documentation', 'Write comprehensive docs for the TaskFlow project', 'pending', '2026-01-20'),
(1, 'Review pull requests', 'Check and merge pending PRs from team members', 'pending', '2026-01-15'),
(1, 'Set up CI/CD pipeline', 'Configure GitHub Actions for automated testing', 'completed', '2026-01-10'),
(1, 'Design database schema', 'Create ERD and table definitions', 'completed', '2026-01-08'),
(1, 'Team meeting preparation', 'Prepare slides for weekly standup', 'pending', NULL);
```

---

## 5. API Specification

### 5.1 Base URL

```
Development: http://localhost:3001/api
```

### 5.2 Response Format

All API responses follow this structure:

**Success Response:**
```json
{
  "success": true,
  "data": { ... }
}
```

**Error Response:**
```json
{
  "success": false,
  "error": {
    "message": "Error description",
    "code": "ERROR_CODE"
  }
}
```

### 5.3 Authentication Endpoints

#### POST `/api/auth/register`

Create a new user account.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securepassword123",
  "name": "John Doe"
}
```

**Validation Rules:**
- `email`: Required, valid email format, max 255 chars
- `password`: Required, min 6 chars
- `name`: Required, min 2 chars, max 100 chars

**Success Response (201 Created):**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": 1,
      "email": "user@example.com",
      "name": "John Doe",
      "created_at": "2026-01-14T10:30:00Z"
    }
  }
}
```

**Error Responses:**
- `400` - Validation error or email already exists
- `500` - Server error

---

#### POST `/api/auth/login`

Authenticate user and receive JWT token.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securepassword123"
}
```

**Success Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": 1,
      "email": "user@example.com",
      "name": "John Doe"
    }
  }
}
```

*Note: JWT token is set as an httpOnly cookie named `token`*

**Error Responses:**
- `400` - Missing email or password
- `401` - Invalid credentials
- `500` - Server error

---

#### POST `/api/auth/logout`

Clear authentication cookie.

**Success Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "message": "Logged out successfully"
  }
}
```

---

#### GET `/api/auth/me`

Get current authenticated user. **(Protected)**

**Headers:**
```
Cookie: token=<jwt_token>
```

**Success Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": 1,
      "email": "user@example.com",
      "name": "John Doe",
      "created_at": "2026-01-14T10:30:00Z"
    }
  }
}
```

**Error Responses:**
- `401` - Not authenticated

---

### 5.4 Task Endpoints

*All task endpoints require authentication*

#### GET `/api/tasks`

Get all tasks for the authenticated user.

**Query Parameters:**
| Parameter | Type | Description |
|-----------|------|-------------|
| status | string | Filter by status: `all`, `pending`, `completed` |

**Example Request:**
```
GET /api/tasks?status=pending
```

**Success Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "tasks": [
      {
        "id": 1,
        "user_id": 1,
        "title": "Complete project documentation",
        "description": "Write comprehensive docs",
        "status": "pending",
        "due_date": "2026-01-20",
        "created_at": "2026-01-14T10:30:00Z",
        "updated_at": "2026-01-14T10:30:00Z"
      }
    ],
    "count": 1
  }
}
```

---

#### POST `/api/tasks`

Create a new task.

**Request Body:**
```json
{
  "title": "New task title",
  "description": "Task description (optional)",
  "priority": "high",
  "due_date": "2026-01-25"
}
```

**Validation Rules:**
- `title`: Required, min 1 char, max 255 chars
- `description`: Optional, text
- `priority`: Optional, one of: 'low', 'medium', 'high' (default: 'medium')
- `due_date`: Optional, valid date format (YYYY-MM-DD)

**Success Response (201 Created):**
```json
{
  "success": true,
  "data": {
    "task": {
      "id": 6,
      "user_id": 1,
      "title": "New task title",
      "description": "Task description",
      "status": "pending",
      "due_date": "2026-01-25",
      "created_at": "2026-01-14T11:00:00Z",
      "updated_at": "2026-01-14T11:00:00Z"
    }
  }
}
```

**Error Responses:**
- `400` - Validation error
- `401` - Not authenticated
- `500` - Server error

---

#### GET `/api/tasks/:id`

Get a single task by ID.

**Success Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "task": {
      "id": 1,
      "user_id": 1,
      "title": "Complete project documentation",
      "description": "Write comprehensive docs",
      "status": "pending",
      "due_date": "2026-01-20",
      "created_at": "2026-01-14T10:30:00Z",
      "updated_at": "2026-01-14T10:30:00Z"
    }
  }
}
```

**Error Responses:**
- `401` - Not authenticated
- `404` - Task not found (or doesn't belong to user)

---

#### PUT `/api/tasks/:id`

Update an existing task.

**Request Body:**
```json
{
  "title": "Updated title",
  "description": "Updated description",
  "status": "completed",
  "due_date": "2026-01-30"
}
```

*All fields are optional - only provided fields will be updated*

**Success Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "task": {
      "id": 1,
      "user_id": 1,
      "title": "Updated title",
      "description": "Updated description",
      "status": "completed",
      "due_date": "2026-01-30",
      "created_at": "2026-01-14T10:30:00Z",
      "updated_at": "2026-01-14T12:00:00Z"
    }
  }
}
```

**Error Responses:**
- `400` - Validation error
- `401` - Not authenticated
- `404` - Task not found

---

#### DELETE `/api/tasks/:id`

Delete a task permanently.

**Success Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "message": "Task deleted successfully"
  }
}
```

**Error Responses:**
- `401` - Not authenticated
- `404` - Task not found

---

#### PATCH `/api/tasks/:id/status`

Toggle task status between 'pending' and 'completed'.

**Success Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "task": {
      "id": 1,
      "status": "completed",
      "updated_at": "2026-01-14T12:30:00Z"
    }
  }
}
```

**Error Responses:**
- `401` - Not authenticated
- `404` - Task not found

---

### 5.5 Health Check Endpoint

#### GET `/api/health`

Check if API and database are operational.

**Success Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "status": "healthy",
    "timestamp": "2026-01-14T10:00:00Z",
    "database": "connected"
  }
}
```

---

## 6. Frontend Specification

### 6.1 Component Architecture

```
App
├── AuthProvider (Context)
│   └── Router
│       ├── PublicRoute
│       │   ├── /login → Login
│       │   └── /register → Register
│       │
│       └── ProtectedRoute (requires auth)
│           ├── /dashboard → Dashboard
│           │   ├── Navbar
│           │   ├── TaskFilter
│           │   └── TaskList
│           │       └── TaskCard (multiple)
│           │
│           ├── /tasks/new → TaskForm (create mode)
│           └── /tasks/:id/edit → TaskForm (edit mode)
```

### 6.2 Route Definitions

| Path | Component | Auth Required | Description |
|------|-----------|---------------|-------------|
| `/` | Redirect | No | Redirects to `/dashboard` or `/login` |
| `/login` | Login | No | User login form |
| `/register` | Register | No | User registration form |
| `/dashboard` | Dashboard | Yes | Main task list view |
| `/tasks/new` | TaskForm | Yes | Create new task |
| `/tasks/:id/edit` | TaskForm | Yes | Edit existing task |

### 6.3 Component Specifications

#### 6.3.1 Pages

**Login Page**
- Email input field
- Password input field
- Submit button
- Link to Register page
- Error message display
- Redirect to Dashboard on success

**Register Page**
- Name input field
- Email input field
- Password input field
- Confirm password input field
- Submit button
- Link to Login page
- Error message display
- Redirect to Dashboard on success

**Dashboard Page**
- Navbar with user info and logout
- "New Task" button
- Filter dropdown (All, Pending, Completed)
- Task list display
- Empty state when no tasks

**TaskForm Page**
- Title input (required)
- Description textarea (optional)
- Due date picker (optional)
- Save button
- Cancel button (returns to Dashboard)
- Delete button (edit mode only)

#### 6.3.2 Reusable Components

**Navbar**
```jsx
Props: none (uses AuthContext)
Features:
  - Logo/app name
  - User name display
  - Logout button
```

**TaskCard**
```jsx
Props:
  - task: { id, title, description, status, due_date }
  - onStatusToggle: (id) => void
  - onDelete: (id) => void

Features:
  - Display title (truncated if long)
  - Display description preview
  - Display due date (with overdue indicator)
  - Status checkbox/toggle
  - Edit button (links to edit page)
  - Delete button
```

**TaskList**
```jsx
Props:
  - tasks: Task[]
  - onStatusToggle: (id) => void
  - onDelete: (id) => void

Features:
  - Map over tasks to render TaskCards
  - Empty state message when no tasks
```

**TaskFilter**
```jsx
Props:
  - currentFilter: 'all' | 'pending' | 'completed'
  - onFilterChange: (filter) => void

Features:
  - Dropdown or button group
  - Active state indication
```

**Button**
```jsx
Props:
  - variant: 'primary' | 'secondary' | 'danger'
  - size: 'sm' | 'md' | 'lg'
  - loading: boolean
  - disabled: boolean
  - onClick: () => void
  - children: ReactNode
```

**Input**
```jsx
Props:
  - type: 'text' | 'email' | 'password' | 'date'
  - label: string
  - error: string
  - required: boolean
  - ...standard input props
```

### 6.4 State Management

#### AuthContext

```jsx
// Context value shape
{
  user: User | null,
  loading: boolean,
  login: (email, password) => Promise<void>,
  register: (name, email, password) => Promise<void>,
  logout: () => Promise<void>,
  isAuthenticated: boolean
}
```

#### Task State (Dashboard)

```jsx
// State managed with useState/useReducer in Dashboard
{
  tasks: Task[],
  loading: boolean,
  error: string | null,
  filter: 'all' | 'pending' | 'completed'
}
```

### 6.5 API Service Layer

```javascript
// services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, // For httpOnly cookies
});

export default api;

// services/authService.js
export const authService = {
  login: (email, password) => api.post('/auth/login', { email, password }),
  register: (name, email, password) => api.post('/auth/register', { name, email, password }),
  logout: () => api.post('/auth/logout'),
  getMe: () => api.get('/auth/me'),
};

// services/taskService.js
export const taskService = {
  getAll: (status) => api.get('/tasks', { params: { status } }),
  getOne: (id) => api.get(`/tasks/${id}`),
  create: (data) => api.post('/tasks', data),
  update: (id, data) => api.put(`/tasks/${id}`, data),
  delete: (id) => api.delete(`/tasks/${id}`),
  toggleStatus: (id) => api.patch(`/tasks/${id}/status`),
};
```

### 6.6 UI Design System

TaskFlow uses a playful, illustrated design aesthetic with hand-drawn styling.

#### Color Palette

| Purpose | Color | Hex | Tailwind |
|---------|-------|-----|----------|
| Primary | Sketch Yellow | `#FFE600` | `bg-[#FFE600]` |
| Borders/Text | Sketch Black | `#1A1A1A` | `text-[#1A1A1A]`, `border-[#1A1A1A]` |
| Background | Cream | `#FAFAF8` | `bg-[#FAFAF8]` |
| Cards | White | `#FFFFFF` | `bg-white` |
| Success | Green | `#51CF66` | `bg-[#51CF66]` |
| Danger | Red | `#FF6B6B` | `bg-[#FF6B6B]` |
| Hover | Soft Yellow | `#FFF9DB` | `bg-[#FFF9DB]` |

#### Typography

| Style | Font Family | Usage |
|-------|-------------|-------|
| Headings | Caveat | Logo, page titles, section headers |
| Body | DM Sans | All other text |

```css
/* Font imports */
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap');
```

#### Component Styles

**Sketch Card:**
```css
.sketch-card {
  background: #FFFFFF;
  border: 2px solid #1A1A1A;
  border-radius: 12px;
  box-shadow: 4px 4px 0px 0px #1A1A1A;
}
```

**Sketch Button:**
```css
.sketch-btn {
  border: 2px solid #1A1A1A;
  border-radius: 12px;
  font-weight: 600;
  transition: all 150ms ease-out;
}
.sketch-btn:hover {
  box-shadow: 6px 6px 0px 0px #1A1A1A;
  transform: translateY(-4px);
}
```

**Sketch Input:**
```css
.sketch-input {
  border: 2px solid #1A1A1A;
  border-radius: 12px;
  padding: 12px 16px;
}
.sketch-input:focus {
  box-shadow: 0 0 0 2px #FFE600;
}
```

#### Animations

| Animation | Effect | Duration |
|-----------|--------|----------|
| page-enter | Slide up + fade in | 300ms |
| stagger-item | Cascading fade in | 50ms delay per item |
| check-animation | Draw checkmark SVG | 300ms |
| priority-high-pulse | Gentle scale pulse | 2s infinite |

#### SVG Illustrations

Custom React components in `frontend/src/components/illustrations/`:

| Component | Usage |
|-----------|-------|
| `WaveIllustration` | Decorative background on auth pages |
| `ChecklistIllustration` | Logo/header, task-related icons |
| `TeamIllustration` | Registration page |
| `CelebrateIllustration` | Dashboard progress section |
| `WritingIllustration` | Task form, empty states |

#### Spacing

- Page padding: `px-4 py-8`
- Card padding: `p-5` to `p-8`
- Element gap: `gap-4` (16px)
- Section margin: `mb-6` to `mb-8`

#### Priority Indicators

| Priority | Badge Color | Border Color |
|----------|-------------|--------------|
| High | `#FF6B6B` (red) | `border-l-[#FF6B6B]` |
| Medium | `#FFE600` (yellow) | `border-l-[#FFE600]` |
| Low | `#51CF66` (green) | `border-l-[#51CF66]` |

---

## 7. Security Considerations

### 7.1 Authentication

- Passwords hashed with bcrypt (10 rounds)
- JWT stored in httpOnly cookie (prevents XSS)
- JWT expires in 7 days
- CORS configured for frontend origin only

### 7.2 Authorization

- All task endpoints verify user ownership
- Users can only access their own tasks
- Task queries filter by user_id

### 7.3 Input Validation

- Server-side validation on all inputs
- Parameterized SQL queries (prevent SQL injection)
- Input sanitization on frontend and backend

### 7.4 Environment Variables

- Sensitive data stored in `.env` files
- `.env` files excluded from version control
- Different configs for development/production

---

## 8. Error Handling

### 8.1 Error Codes

| Code | HTTP Status | Description |
|------|-------------|-------------|
| VALIDATION_ERROR | 400 | Invalid input data |
| UNAUTHORIZED | 401 | Authentication required |
| FORBIDDEN | 403 | Access denied |
| NOT_FOUND | 404 | Resource not found |
| CONFLICT | 409 | Resource already exists (e.g., email) |
| SERVER_ERROR | 500 | Internal server error |

### 8.2 Backend Error Handler

```javascript
// middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  
  const status = err.status || 500;
  const message = err.message || 'Internal server error';
  const code = err.code || 'SERVER_ERROR';
  
  res.status(status).json({
    success: false,
    error: { message, code }
  });
};
```

### 8.3 Frontend Error Handling

- Display user-friendly error messages
- Show toast notifications for actions
- Form validation errors displayed inline
- Network errors trigger retry option

---

## Approval Checklist

Before implementation, please confirm:

- [ ] Project structure is acceptable
- [ ] Database schema meets requirements
- [ ] API endpoints cover all needed functionality
- [ ] Frontend component structure is clear
- [ ] Technology choices are approved
- [ ] Security approach is satisfactory

---

**End of Technical Specification**
