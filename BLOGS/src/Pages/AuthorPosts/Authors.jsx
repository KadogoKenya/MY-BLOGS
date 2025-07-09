import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Authors.css';
import Footer from '../../Components/Footer/Footer';

function Authors() {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const res = await fetch('http://localhost:3000/authors');
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        setAuthors(data.authors || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAuthors();
  }, []);

  if (loading) return <div>Loading authors...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <section className="authors">
        <h3 className='authorsInfo'>Available Authors</h3>
        <div className="authors_container">
          {authors.map(({ id, avatar, fullName, _count }) => (
            <Link key={id} to={`/posts/users/${id}`} className="author_link">
              <div className="author_avatar">
                <img src={`http://localhost:3000/uploads/${avatar || 'default.jpg'}`} alt={`${fullName}'s avatar`} />
              </div>
              <div className="author_info">
                <h4>{fullName}</h4>
                <p>Posts made: {_count?.posts || 0}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Authors;
