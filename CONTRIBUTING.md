# Contributing to TaskFlow

First off, thank you for considering contributing to TaskFlow! 🎉

Every contribution helps make TaskFlow better, and we truly appreciate your time and effort.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#-reporting-bugs)
  - [Suggesting Features](#-suggesting-features)
  - [Your First Code Contribution](#-your-first-code-contribution)
  - [Pull Request Process](#-pull-request-process)
- [Development Setup](#development-setup)
- [Style Guidelines](#style-guidelines)
- [Questions?](#questions)

---

## Code of Conduct

This project follows a simple code of conduct: **be kind and respectful**. We're all here to learn and build something great together.

---

## How Can I Contribute?

### 🐛 Reporting Bugs

Found a bug? Help us fix it by creating a detailed bug report.

**Before submitting:**
1. Check the [existing issues](../../issues) to avoid duplicates
2. Make sure you're using the latest version

**When submitting, include:**

```markdown
### Bug Description
A clear, concise description of the bug.

### Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

### Expected Behavior
What you expected to happen.

### Actual Behavior
What actually happened.

### Screenshots
If applicable, add screenshots.

### Environment
- OS: [e.g., macOS 14.0, Windows 11, Ubuntu 22.04]
- Browser: [e.g., Chrome 120, Safari 17]
- Node.js version: [e.g., 20.10.0]
- PostgreSQL version: [e.g., 14.9]
```

**Use this issue title format:** `[Bug] Brief description of the issue`

---

### 💡 Suggesting Features

Have an idea to make TaskFlow better? We'd love to hear it!

**When submitting a feature request:**

```markdown
### Feature Description
A clear description of the feature you'd like to see.

### Problem it Solves
What problem does this feature solve? What's the use case?

### Proposed Solution
How do you envision this working?

### Alternatives Considered
Any alternative solutions you've thought of?

### Additional Context
Any mockups, examples, or extra information.
```

**Use this issue title format:** `[Feature] Brief description of the feature`

---

### 🚀 Your First Code Contribution

New to the project? Here's how to get started:

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/TaskFlow.git
   cd TaskFlow
   ```

2. **Set up the development environment**
   ```bash
   # Follow the setup instructions in README.md
   # or use the quick guide in RUNLOCALLY.md
   ```

3. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/bug-you-are-fixing
   ```

4. **Make your changes**
   - Write clean, readable code
   - Follow the existing code style
   - Add comments where helpful

5. **Test your changes**
   - Make sure the app runs without errors
   - Test the feature/fix you implemented
   - Check that existing features still work

6. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   # or
   git commit -m "fix: fix the bug description"
   ```

7. **Push and create a Pull Request**
   ```bash
   git push origin feature/your-feature-name
   ```
   Then open a Pull Request on GitHub!

---

### 🔀 Pull Request Process

1. **Fill out the PR template** with all relevant information

2. **PR Title Format:**
   - `feat: add new feature` — for new features
   - `fix: resolve issue` — for bug fixes
   - `docs: update documentation` — for docs changes
   - `style: format code` — for formatting only
   - `refactor: restructure code` — for refactoring

3. **PR Checklist:**
   - [ ] My code follows the project's style guidelines
   - [ ] I have tested my changes locally
   - [ ] I have added comments where necessary
   - [ ] My changes don't break existing functionality
   - [ ] I have updated documentation if needed

4. **What happens next:**
   - A maintainer will review your PR
   - They may request changes or ask questions
   - Once approved, your PR will be merged! 🎉

---

## Development Setup

### Quick Start

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/TaskFlow.git
cd TaskFlow

# Set up database
createdb taskflow
psql -d taskflow -f database/schema.sql
psql -d taskflow -f database/seeds.sql

# Backend
cd backend
npm install
cp .env.example .env
# Edit .env with your database credentials
npm run dev

# Frontend (new terminal)
cd frontend
npm install
npm run dev
```

### Useful Commands

| Command | Location | Description |
|---------|----------|-------------|
| `npm run dev` | `/backend` | Start backend dev server |
| `npm run dev` | `/frontend` | Start frontend dev server |
| `npm install` | Either | Install dependencies |

---

## Style Guidelines

### JavaScript/React

- Use **ES6+ syntax** (arrow functions, destructuring, etc.)
- Use **functional components** with hooks
- Keep components **small and focused**
- Use **meaningful variable names**

```javascript
// ✅ Good
const handleTaskComplete = (taskId) => {
  // ...
};

// ❌ Avoid
const htc = (id) => {
  // ...
};
```

### CSS/Tailwind

- Use **Tailwind utility classes** when possible
- Group related classes logically
- Use **arbitrary values** sparingly: `text-[#1A1A1A]`

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add task priority filtering
fix: resolve login redirect issue
docs: update API documentation
style: format Dashboard component
refactor: simplify task state management
```

---

## Questions?

- 💬 Open a [Discussion](../../discussions) for general questions
- 🐛 Open an [Issue](../../issues) for bugs or feature requests

---

Thank you for contributing! 🙌
