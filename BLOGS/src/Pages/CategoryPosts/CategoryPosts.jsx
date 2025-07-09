import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostItems from '../../Components/Posts/PostItems';
import './CategoryPosts.css';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';

function CategoryPosts() {
  const { category } = useParams();
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryPosts = async () => {
      try {
        const res = await fetch(`http://localhost:3000/posts/categories/${category}`);
        
        const data = await res.json();
        
        if (data.success) {
          setFilteredPosts(data.posts);
        } else {
          setFilteredPosts([]);
          console.error(data.message);
        }
      } catch (error) {
        console.error("Fetch error:", error);
        setFilteredPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryPosts();
}, [category]);

  return (
    <>
    <Header />
    <section className="category-posts">
      <h2 className="category-posts__title">Posts in {category}</h2>

      {loading ? (
        <h2>Loading...</h2>
      ) : filteredPosts.length > 0 ? (
        <div className="category-posts__grid">
          {filteredPosts.map(({ id, thumbnail, category, title, description, author }) => (
            <PostItems 
              key={id}
              postID={id}
              thumbnail={`http://localhost:3000/uploads/${thumbnail}`}
              category={category}
              title={title}
              description={description}
              author={author}
            />
          ))}
        </div>
      ) : (
        <h2 className="category-posts__empty">No posts found in {category}</h2>
      )}
    </section>

    <Footer />

    </>
  );
}

export default CategoryPosts;
