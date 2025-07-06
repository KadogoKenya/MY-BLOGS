import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../assets/farmThree.jpg';

function PostAuthor({ author, createdAt }) {
  if (!author) return null;

  // Format date
  const date = new Date(createdAt);
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <Link to={`/posts/users/${author.id}`} className="post_author">
      <div className="post_author-avatar">
        <img src={Avatar} alt="Author avatar" />
      </div>
      <div className="post_author-details">
        <h5>By: {author.fullName}</h5>
        <small>{formattedDate}</small>
      </div>
    </Link>
  );
}

export default PostAuthor;
