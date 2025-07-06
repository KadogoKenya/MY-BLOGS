import express from 'express';
import upload from '../middleware/upload.js';
import { createPost } from '../controllers/post.controller.js';

const router = express.Router();

// Route to handle post creation
router.post('/create', upload.single('thumbnail'), createPost);

export default router;
