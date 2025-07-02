import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../../assets/farmThree.jpg';


function PostAuthor() {
  return (
    <div>
        <Link to={`posts/users/sdhj`} className='post_author'>
            <div className="post_author-avatar">
                <img src={Avatar} alt='image' />
            </div>
            <div className="post_author-details">
                <h5>By: Kate D</h5>
                <small>Just Now</small>
            </div>
        
        </Link>
    </div>
  )
}

export default PostAuthor
