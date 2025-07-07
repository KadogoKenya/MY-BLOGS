import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Authors.css';
import avatarFallback from '../../assets/EducationOne.jpg'; 
function Authors() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const res = await fetch('http://localhost:3000/authors');
        const data = await res.json();

        if (res.ok) {
          setAuthors(data.authors);
        } else {
          console.error("Server error:", data.message);
        }
      } catch (error) {
        console.error("Failed to fetch authors:", error);
      }
    };

    fetchAuthors();
  }, []);

  return (
    <section className="authors">
      <h3 className="authorsInfo">Available Authors</h3>
      <div className="authors_container">
        {authors.map(({ id, fullName, _count }) => (
          <Link key={id} to={`/posts/users/${id}`} className="author_link">
            <div className="author_avatar">
              <img src={avatarFallback} alt={`${fullName}'s avatar`} />
            </div>
            <div className="author_info">
              <h4>{fullName}</h4>
              <p>Posts made: {_count.posts}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Authors;
