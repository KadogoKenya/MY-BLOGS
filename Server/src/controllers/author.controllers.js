import prisma from '../lib/db.js';

const getAllAuthors = async (req, res) => {
  try {
    const authors = await prisma.user.findMany({
      include: {
        _count: {
          select: { posts: true }
        }
      }
    });

    res.status(200).json({ authors });
  } catch (error) {
    console.error("Error fetching authors:", error);
    res.status(500).json({ message: "Failed to fetch authors" });
  }
};

export default getAllAuthors
