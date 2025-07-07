import React, { useEffect, useState } from 'react';
import PostItems from './PostItems';
import './Posts.css';
import Footer from '../Footer/Footer.jsx';
import { useAuth } from '../../context/AuthContext'; // Optional: if you need auth info

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const { currentUser } = useAuth(); // Uncomment if you need user info

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const res = await fetch('http://localhost:3000/posts');
        
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setPosts(data.posts || []);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
        setError(error.message || 'Failed to load posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <section className="posts">
        {loading ? (
          <div className="loading-spinner">Loading...</div>
        ) : error ? (
          <div className="error-message">
            <h2>Error Loading Posts</h2>
            <p>{error}</p>
            <button onClick={() => window.location.reload()}>Retry</button>
          </div>
        ) : posts.length > 0 ? (
          <div className="posts_container">
            {posts.map((post) => {
              // Handle potential missing data
              const authorName = post.author?.fullName || 'Unknown Author';
              const postDate = post.createdAt 
                ? new Date(post.createdAt).toLocaleDateString() 
                : 'No date';

              return (
                <PostItems
                  key={post.id}
                  postID={post.id}
                  thumbnail={post.thumbnail 
                    ? `http://localhost:3000/uploads/${post.thumbnail}`
                    : '/default-thumbnail.jpg'} // Fallback image
                  category={post.category || 'Uncategorized'}
                  title={post.title || 'Untitled Post'}
                  description={post.description || ''}
                  author={authorName}
                  createdAt={postDate}
                />
              );
            })}
          </div>
        ) : (
          <div className="no-posts">
            <h2>No Posts Found</h2>
            <p>Be the first to create a post!</p>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}

export default Posts;