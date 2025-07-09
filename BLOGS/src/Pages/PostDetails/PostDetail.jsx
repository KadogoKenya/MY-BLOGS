import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import PostAuthor from '../../Components/Posts/PostAuthor';
import './PostDetail.css';
import Footer from '../../Components/Footer/Footer'

function PostDetail() {
  const { id: postID } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch post by ID
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`http://localhost:3000/posts/${postID}`);
        const data = await res.json();

        if (res.ok) {
          setPost(data.post);
        } else {
          console.error("Error fetching post:", data.message);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postID]);

  // Delete post
const handleDelete = async () => {
  try {
    const res = await fetch(`http://localhost:3000/posts/${postID}`, {
      method: 'DELETE'
    });

    if (res.ok) {
      alert("Post deleted successfully");
      navigate('/');
    } else {
      const data = await res.json();
      console.error("Failed to delete post:", data.message || data);
    }
  } catch (error) {
    console.error("Error when deleting post:", error.message);
  }
};


  // Loading and error states
  if (loading) return <h2>Loading...</h2>;
  if (!post) return <h2>Post not found</h2>;

  // Destructure post fields
  const {
    title,
    description,
    thumbnail,
    category,
    createdAt,
    author
  } = post;

  const readableDate = createdAt ? new Date(createdAt).toLocaleDateString() : 'Unknown date';
  const authorName = author?.fullName || 'Unknown';
  const authorId = author?.id;

  return (
    <>
    <section className="post-detail">
      <div className="container post-detail_container">
        <div className="post-detail_header">
          <PostAuthor author={author} createdAt={createdAt} />
          <div className="post-detail_buttons">
            <Link to={`/posts/${postID}/edit`} className='btn_edit'>Edit</Link>
            <button onClick={handleDelete} className="btn-sm-primary">Delete</button>
          </div>
        </div>

        <h1>{title}</h1>

        <div className="post-detail_thumbnail">
          <img src={`http://localhost:3000/uploads/${thumbnail}`} alt={title} />
        </div>

        {/* ✅ Display rich text HTML content safely */}
        <div className="p-content" dangerouslySetInnerHTML={{ __html: description }} />

        <div className="post-meta">
          <span>Category: {category}</span> <br />
          <span>Published on: {readableDate}</span> <br />
          {authorId && (
            <Link to={`/posts/users/${authorId}`}>By: {authorName}</Link>
          )}
        </div>
      </div>
    </section>

    <Footer />
    </>
  );
}

export default PostDetail;
