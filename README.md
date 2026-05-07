# Hacker News Scraper MERN Application

A full-stack MERN application that scrapes top stories from Hacker News and allows authenticated users to bookmark stories.

---

## Live Demo

### Frontend

[https://your-frontend.vercel.app](https://dacby-tech.vercel.app/login)

### Backend API

[https://dacby-tech-1.onrender.com](https://dacby-tech-1.onrender.com)

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
├── backend/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── utils/
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── api/
│       ├── assets/
│       ├── components/
│       ├── context/
│       ├── pages/
│       └── services/
````

---

## Installation

Clone repository:

```bash
git clone https://github.com/kashishkushwaha09/dacby-tech.git
```

Move into project folder:



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
MONGO_URI=mongodb+srv://kashishkushwaha03:mHrMJ3YAyO8wNObH@cluster0.cholnji.mongodb.net/?appName=Cluster0
JWT_SECRET=GK6L7Y6MXZlg2v1QvJmInMpcLnBWy1Xk
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
| GET    | /api/stories/:id          |
| POST   | /api/stories/:id/bookmark |

### Scrape

| Method | Endpoint                  |
| ------ | ------------------------- |
| POST   | /api/scrape               |

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

