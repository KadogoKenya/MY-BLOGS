import prisma from '../lib/db.js';

// Create a post
const createPost = async (req, res) => {
  try {
    const { title, category, description, authorId } = req.body;
    const thumbnail = req.file ? req.file.filename : null;

    // Validate required fields
    if (!title || !description || !authorId) {
      return res.status(400).json({ message: 'Title, description, and authorId are required.' });
    }

    // Create the post
    const post = await prisma.post.create({
      data: {
        title,
        category,
        description,
        thumbnail,
        authorId: parseInt(authorId),
      },
    });

    res.status(201).json({ message: 'Post created successfully', post });
  } catch (error) {
    console.error('Post creation error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get all posts with author name
const getPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: {
          select: {
            id: true,
            fullName: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    res.status(200).json({ posts });
  } catch (error) {
    console.error('Unable to fetch posts:', error);
    res.status(500).json({ message: 'Internal server error occurred' });
  }
};

export { createPost, getPosts };
