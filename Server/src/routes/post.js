import express from 'express'
import upload  from '../middleware/upload'
import { createPost } from '../controllers/post.controller'


const router = express.Router();

router.post('/create', upload.single(thumbnail), createPost)


export default router