import React, { useEffect, useState } from 'react';
import PostItems from './PostItems';
import './Posts.css';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('http://localhost:3000/posts');
        const data = await res.json();

        if (res.ok) {
          setPosts(data.posts || []);
        } else {
          console.error("Server returned error:", data.message);
        }
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className="posts">
      {loading ? (
        <h2>Loading...</h2>
      ) : posts.length > 0 ? (
        <div className="posts_container">
          {posts.map(({ id, thumbnail, category, title, description, author, createdAt }) => (
            <PostItems
              key={id}
              postID={id}
              thumbnail={`http://localhost:3000/uploads/${thumbnail}`}
              category={category}
              title={title}
              description={description}
              author={author}
              createdAt={createdAt}
            />
          ))}
        </div>
      ) : (
        <h2>No Posts Found</h2>
      )}
    </section>
  );
}

export default Posts;
