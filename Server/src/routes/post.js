import express from 'express';
import upload from '../middleware/upload.js';
import { createPost, getPosts } from '../controllers/post.controller.js';
import { getPostsByCategory } from '../controllers/category.controllers.js';



const router = express.Router();

// Route to handle post creation
router.post('/create', upload.single('thumbnail'),  createPost);

router.get('/', getPosts)

router.get('./posts/categories/:category', getPostsByCategory )


export default router;
