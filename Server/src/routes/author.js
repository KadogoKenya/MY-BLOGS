import express from 'express';
import { getAllAuthors } from '../controllers/author.controllers.js';

const router = express.Router();

router.get('/', getAllAuthors);

export default router;
