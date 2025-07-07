import React from 'react';
import './Posts.css';
import { Link } from 'react-router-dom';

function PostItems({ postID, category, title, description, author, thumbnail, createdAt }) {
  const shortDescription =
    description.length > 145 ? description.substr(0, 145) + '...' : description;

  const postTitle = title.length > 30 ? title.substr(0, 30) + '...Read more' : title;

  const readableDate = createdAt ? new Date(createdAt).toLocaleDateString() : 'Unknown date';

  const authorName = author?.fullName || 'Unknown';
  const authorId = author?.id;

  return (
    <div className="post-card">
      <div className="post_thumbnail">
          <Link to={`/posts/${postID}`}>
            <img src={thumbnail} alt={title} />
          </Link>
    </div>

      <div className="post-content">
        <Link to={`/posts/${postID}`} className="post-title">
          <h3>{postTitle}</h3>
        </Link>
        <p>{shortDescription}</p>
        <div className="post_footer">
          {authorId ? (
            <Link to={`/posts/users/${authorId}`} className="post_author">
              <span>By: {authorName} • {readableDate}</span>
            </Link>
          ) : (
            <span>By: {authorName} • {readableDate}</span>
          )}

          <Link to={`/posts/categories/${category}`} className="btn category">
            {category}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PostItems;
