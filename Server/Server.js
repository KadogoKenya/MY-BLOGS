import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

import authRoutes from '../Server/src/controllers/auth.js'; 

import postRoutes from './src/routes/post.js'


// Initialize app and Prisma
const app = express();
const prisma = new PrismaClient();


//assigning port
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Registering routes register routes
app.use('/auth', authRoutes);

//create posts routes registration
app.use('./posts',postRoutes)
app.use('./uploads', express.static('uploads'))

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
