import express from 'express';
import upload from '../middleware/upload.js';
import { createPost, getPosts } from '../controllers/post.controller.js';
import { getPostsByCategory } from '../controllers/category.controllers.js';
import { getPostById } from '../controllers/post.controller.js';
import { updatePost } from '../controllers/post.controller.js';





const router = express.Router();

// Route to handle post creation
router.post('/create', upload.single('thumbnail'),  createPost);

router.get('/', getPosts)

router.get('./posts/categories/:category', getPostsByCategory )

router.get('/:id', getPostById);

router.put('/:id', upload.single('thumbnail'), updatePost);


export default router;
