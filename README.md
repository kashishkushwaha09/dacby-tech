# MERN Stack Mini Project README.md

````md
# Hacker News Scraper MERN Application

A full-stack MERN application that scrapes top stories from Hacker News and allows authenticated users to bookmark stories.

---

## Live Demo

### Frontend

https://your-frontend.vercel.app

### Backend API

https://dacby-tech-1.onrender.com

---

## Features

### Frontend

- User Authentication
- Login & Register
- Bookmark Stories
- Protected Routes
- Responsive UI with React Bootstrap
- Loading States
- Error Handling
- Persistent Authentication
- Hacker News Story Feed

### Backend

- Hacker News Web Scraping
- REST API
- JWT Authentication
- MongoDB Integration
- Bookmark Management
- Pagination
- Protected Routes

---

## Tech Stack

### Frontend

- React
- Vite
- React Router DOM
- React Bootstrap
- Axios
- Context API

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Axios
- Cheerio
- bcryptjs

---

## Project Structure

```text
project/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── package.json
````

---

## Installation

Clone repository:

```bash
git clone <your-github-repository-url>
```

Move into project folder:

```bash
cd project-name
```

---

## Frontend Setup

Move into frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run frontend:

```bash
npm run dev
```

---

## Backend Setup

Move into backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Run backend:

```bash
npm run dev
```

---

## Environment Variables

### Backend `.env`

```env
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

### Frontend `.env`

```env
VITE_API_URL=https://dacby-tech-1.onrender.com/api
```

---

## API Endpoints

### Authentication

| Method | Endpoint           |
| ------ | ------------------ |
| POST   | /api/auth/register |
| POST   | /api/auth/login    |

### Stories

| Method | Endpoint                  |
| ------ | ------------------------- |
| GET    | /api/stories              |
| GET    | /api/stories/bookmarks    |
| POST   | /api/stories/:id/bookmark |

---

## Deployment

### Frontend Deployment

* Vercel

### Backend Deployment

* Render

### Database

* MongoDB Atlas

---

## Scraping

The backend scrapes top Hacker News stories using:

* Axios
* Cheerio

---

## Author

Khushboo Kachi

```
```
