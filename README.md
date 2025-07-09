# Blog Application

A full-stack Blog Platform where users can read, create, update, and delete blog posts. Each post is linked to an author and includes category filtering, image uploads, and more.


## 🔧 Tech Stack

**Frontend**
- React.js
- React Router DOM
- CSS Modules / Custom CSS

**Backend**
- Node.js
- Express.js
- Prisma ORM
- Multer (for file uploads)

**Database**
- PostgreSQL (via Prisma)

---

## Project Structure

MY BLOGS/
├── client/ # React frontend
│ └── src/
│ ├── Pages/
│ ├── Components/
│ └── App.js
├── server/ # Node backend
│ ├── controllers/
│ ├── routes/
│ ├── lib/db.js # Prisma client
│ ├── uploads/ # Image uploads
│ ├── prisma/
│ │ └── schema.prisma
│ └── server.js
├── README.md


---

## Features

-  View all blog posts
- Create, update, delete blog posts (with image uploads)
- View posts by specific authors
- Filter posts by category
- Upload thumbnails for each post
- Database relationships via Prisma (Post ↔ User)

## 🛠️ Getting Started

### 1. Clone the Repo

git clone [https://github.com/your-username/blog-app.git](https://github.com/KadogoKenya/MY-BLOGS.git)
cd blog-app

### 1. Clone the Repo
    cd server
    npm install
### Client
    cd ../client
    npm install

### Setup Environment Variables
    DATABASE_URL=postgresql://user:password@localhost:5432/blogdb
    PORT=3000
### Prisma Setup
    cd server
    npx prisma generate
    npx prisma migrate dev --name init
    npx prisma studuo

### app set up
- Backend
    cd server
    npm run dev or npx nodemon Server.js
- Frontend
    cd BLOGS
    npm run dev
