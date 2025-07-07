import prisma from "../lib/db.js";

const getPostsByCategory = async (req, res) => {
    const { category } = req.params;

    try {
        const posts = await prisma.post.findMany({
            where: {
                category: {
                    equals: category,
                    mode: 'insensitive'
                }
            },
            include: {
                author: {
                    select: {
                        id: true,
                        fullName: true,
                        
                    }
                }
            },
            orderBy: {
                createdAt: 'desc' 
            }
        });

        if (!posts || posts.length === 0) {
            return res.status(404).json({ 
                message: `No posts found in category '${category}'`,
                posts: [] 
            });
        }

        res.status(200).json({ 
            success: true,
            posts
        });

    } catch (error) {
        console.error(`Failed to fetch posts for category '${category}':`, error);
        res.status(500).json({ 
            success: false,
            message: 'Internal server error',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
};

export { getPostsByCategory };