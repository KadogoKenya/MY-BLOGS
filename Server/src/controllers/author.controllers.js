import prisma from '../lib/db.js';

export const getAllAuthors = async (req, res) => {
  try {
    const authors = await prisma.user.findMany({
      select: {
        id: true,
        fullName: true,
        avatar: true,
        _count: {
          select: { posts: true }
        }
      }
    });

    res.json({ success: true, authors });
  } catch (error) {
    console.error("Failed to fetch authors:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};


