import prisma from '../lib/db.js'

const createPost = async (req,res) =>{
    try{
        const { title, category, description } = req.body;
        const thumbnail = req.file ? req.file.filename : null;

        if (!title || !description) {
            return res.status(400).json({message: 'title and description are required'})
        }

        const post = await prisma.post.create({
            data: {
                title,
                category,
                description,
                thumbnail
            }
        });
        res.status(201).json({ message: 'post created successfully', post })
    }catch (error){
        console.error('post creation error', error)
        res.status(500).json({ message: 'internal server error' })
    }
};

export { createPost }