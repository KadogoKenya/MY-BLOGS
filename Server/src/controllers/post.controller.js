import prisma from '../lib/db.js';


const createPost = async (req, res) => {
  try {
    const { title, category, description, authorId } = req.body;

    const post = await prisma.post.create({
      data: {
        title,
        category,
        description,
        thumbnail: req.file?.filename || null,
        authorId: req.user.id,
       
      include: {
            author: {
              select: {
                id: true,
                fullName: true
              }
            }
          }
        }
        });

    res.status(201).json({ success: true, post });
  } catch (error) {
    console.error("Post creation error:", error);
    res.status(500).json({ success: false, message: "Failed to create post" });
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
