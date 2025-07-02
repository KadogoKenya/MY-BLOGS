import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DUMMY_POSTS } from '../../Data';
import PostItems from '../../Components/Posts/PostItems';
import './CategoryPosts.css';

function CategoryPosts() {
  const { category } = useParams();
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    // Filter posts when category changes
    const filtered = DUMMY_POSTS.filter(post => 
      post.category.toLowerCase() === category.toLowerCase()
    );
    setFilteredPosts(filtered);
  }, [category]);

  return (
    <section className="category-posts">
      <h2 className="category-posts__title">Posts in {category}</h2>
      {filteredPosts.length > 0 ? (
        <div className="category-posts__grid">
          {filteredPosts.map(({id, thumbnail, category, title, description, authorID}) => (
            <PostItems 
              key={id}
              postID={id}
              thumbnail={thumbnail}
              category={category}
              title={title}
              description={description}
              authorID={authorID}
            />
          ))}
        </div>
      ) : (
        <h2 className="category-posts__empty">No posts found in {category}</h2>
      )}
    </section>
  );
}

export default CategoryPosts;