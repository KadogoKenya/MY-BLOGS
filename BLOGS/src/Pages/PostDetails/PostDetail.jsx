import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PostAuthor from '../../Components/Posts/PostAuthor';
import './PostDetail.css';

function PostDetail() {
  const { id: postID } = useParams(); // 👈 Correct param name
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <h2>Loading...</h2>;
  if (!post) return <h2>Post not found</h2>;

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
    <section className="post-detail">
      <div className="container post-detail_container">
        <div className="post-detail_header">
          <PostAuthor author={author} createdAt={createdAt} />
          <div className="post-detail_buttons">
            <Link to={`/posts/${postID}/edit`} className='btn_edit'>Edit</Link>
            <Link to={`/posts/${postID}/delete`} className='btn-sm-primary'>Delete</Link>
          </div>
        </div>

        <h1>{title}</h1>
        <div className="post-detail_thumbnail">
          <img src={`http://localhost:3000/uploads/${thumbnail}`} alt={title} />
        </div>

        <div className="p-content" dangerouslySetInnerHTML={{ __html: description }}></div>

        <div className="post-meta">
          <span>Category: {category}</span> <br />
          <span>Published on: {readableDate}</span> <br />
          {authorId && (
            <Link to={`/posts/users/${authorId}`}>By: {authorName}</Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default PostDetail;
