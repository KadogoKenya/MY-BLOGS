import prisma from '../lib/db.js';
import express from 'express'
import fs from 'fs';
import path from 'path';



const router = express.Router();

// creating a post
const createPost = async (req, res) => {
  try {
    const { title, category, description, authorId } = req.body;

    const post = await prisma.post.create({
      data: {
        title,
        category,
        description,
        thumbnail: req.file?.filename || null,
        author: authorId
          ? { connect: { id: parseInt(authorId) } }
          : undefined
      },
      
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

export const getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await prisma.post.findUnique({
      where: { id: parseInt(id) }, 
      include: { author: true }
    });

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.json({ post });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Editing a post

export const updatePost = async (req, res) => {
  const postId = parseInt(req.params.id);
  const { title, category, description } = req.body;
  const thumbnailFile = req.file;

  console.log("Updating post:", { postId, title, category, description });

  try {
    const existingPost = await prisma.post.findUnique({ where: { id: postId } });
    if (!existingPost) {
      return res.status(404).json({ message: 'Post not found' });
    }

    let thumbnail = existingPost.thumbnail;

    if (thumbnailFile) {

      thumbnail = thumbnailFile.filename;
    }

    const updatedPost = await prisma.post.update({
      where: { id: postId },
      data: {
        title,
        category,
        description,
        thumbnail,
        updatedAt: new Date(),
      }
    });

    return res.json({ message: 'Post updated', post: updatedPost });

  } catch (error) {
    console.error("Error updating post:", error);
    return res.status(500).json({ message: 'Failed to update post', error });
  }
};


// deleting a post

export const deletePost = async (req, res) => {
  const postId = parseInt(req.params.id);

  try {
    const post = await prisma.post.findUnique({
      where: { id: postId }
    });

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const imagePath = path.join('uploads', post.thumbnail);
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    await prisma.post.delete({
      where: { id: postId }
    });

    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).json({ message: "Failed to delete post" });
  }
};

// getting posts by categories
export const getPostsByCategory = async (req, res) => {
  const { category } = req.params;

  try {
    const posts = await prisma.post.findMany({
      where: {
        category: category
      },
      include: {
        author: {
          select: {
            id: true,
            fullName: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    res.json({ success: true, posts });
  } catch (error) {
    console.error("Error fetching category posts:", error);
    res.status(500).json({ success: false, message: "Failed to fetch category posts" });
  }
};



export { createPost, getPosts };
