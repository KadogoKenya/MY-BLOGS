import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Authors.css'
import Avatar1 from '../../assets/groceryOne.jpg'
import Avatar2 from '../../assets/groceryTwo.jpg'
import Avatar3 from '../../assets/farmOne.jpg'
import Avatar4 from '../../assets/farmTwo.jpg'
import Avatar5 from '../../assets/farmThree.jpg'
import Avatar6 from '../../assets/groceryThree.jpg'
import Avatar7 from '../../assets/farmOne.jpg'
import Avatar8 from '../../assets/farmTwo.jpg'
import Avatar9 from '../../assets/farmThree.jpg'
import Avatar10 from '../../assets/groceryThree.jpg'


const authorsData = [
  { id: 1, avatar: Avatar1, name: 'Ernest Achiever', posts: 3 },
  { id: 2, avatar: Avatar2, name: 'Kate Kanini', posts: 5 },
  { id: 3, avatar: Avatar3, name: 'Faith Mwikali', posts: 2 },
  { id: 4, avatar: Avatar4, name: 'Brian Okello', posts: 4 },
  { id: 5, avatar: Avatar5, name: 'Zainab Noor', posts: 1 },
  { id: 6, avatar: Avatar6, name: 'Liam Wanjohi', posts: 6 },
  { id: 7, avatar: Avatar7, name: 'Cicilia Mwikali', posts: 2 },
  { id: 8, avatar: Avatar8, name: 'James Okello', posts: 4 },
  { id: 9, avatar: Avatar9, name: 'Chris Noor', posts: 1 },
  { id: 10, avatar: Avatar10, name: 'Jens Wanjohi', posts: 6 },
];

function Authors() {

  const [authors,setAuthors] = useState(authorsData)

  return (
    <section className="authors">
      <h3 className='authorsInfo'>Available Authors</h3>
      <div className="authors_container">
        
        {authors.map(({id,avatar,name, posts}) => (
          <Link key={id} to={`/posts/users/${id}`} className="author_link">
            <div className="author_avatar">
              <img src={avatar} alt={`${name}'s avatar`} />
            </div>
            <div className="author_info">
              <h4>{name}</h4>
              <p>Posts made: {posts}</p>
            </div>
          </Link>       
        ))}
      </div>
    </section>
  )
}

export default Authors