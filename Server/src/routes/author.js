import express from 'express';
import { getAllAuthors } from '../controllers/author.controller.js';

const router = express.Router();

router.get('/authors', getAllAuthors);

export default router;
