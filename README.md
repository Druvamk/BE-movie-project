# Movie Backend API

This is a backend API for movie management built using **Node.js**, **Express**, **MySQL**, and **Sequelize ORM**. It provides CRUD operations and supports pagination features.

---

## Features

- RESTful API endpoints for movies (Create, Read, Update, Delete)
- Pagination support on list queries
- Sequelize ORM for MySQL database interactions
- Environment-based configuration for secure secrets and DB connection
- Ready for deployment on various cloud platforms (not yet deployed)

---

## Tech Stack

- **Node.js** — JavaScript runtime
- **Express.js** — API framework
- **MySQL** — Relational Database
- **Sequelize** — ORM for MySQL database
- **dotenv** — Manage environment variables
- **Validation Libraries** — Zod (choose one for input validation)

---

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- MySQL database instance (local or cloud)
- npm or yarn package manager

### Installation

1. Clone the repository:
   git clone <your-repo-url>
   cd <your-repo-folder>
   npm install

2. Setup environment variables by creating a `.env` file in the root:
   DATABASE_URL=mysql://username:password%40yourpassword@host:port/database_name
   JWT_SECRET=your_jwt_secret_key
   PORT=3000

> **Note:** If your password contains special characters (e.g., @), encode them properly (`@` → `%40`).

3. (Optional) Run migrations or sync Sequelize models to your DB.

4. Start the server:
   npm run start

By default, the API runs at `http://localhost:3000`.

---

## API Endpoints

| Method | Endpoint      | Description                                              |
| ------ | ------------- | -------------------------------------------------------- |
| GET    | `/movies`     | List movies with optional search & pagination parameters |
| GET    | `/movies/:id` | Retrieve a movie by its ID                               |
| POST   | `/movies`     | Create a new movie                                       |
| PUT    | `/movies/:id` | Update a movie by ID                                     |
| DELETE | `/movies/:id` | Delete a movie by ID                                     |

### Query Parameters for `GET /movies`

- `search` (string) — Filter movies by title or director
- `page` (integer) — Page number for pagination (default: 1)
- `limit` (integer) — Number of items per page (default: 10)

---

## Project Structure

- `/models` — Sequelize models
- `/routes` — Express route handlers
- `/controllers` — API logic
- `/config` — Database and app configs
- `app.js` — Main application bootstrap file

(Not yet deployement facing some issue in deployement staff)

Thank You
