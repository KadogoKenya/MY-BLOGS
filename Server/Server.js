import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './src/controllers/auth.js';
import postRoutes from './src/routes/post.js';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize app and Prisma
const app = express();
const prisma = new PrismaClient();

//assigning port
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/auth', authRoutes);
app.use('/posts', postRoutes); // ✅ correct route path
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // ✅ full path to uploads

// Test route (optional)
app.get('/', (req, res) => {
  res.send('API is up and running');
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
