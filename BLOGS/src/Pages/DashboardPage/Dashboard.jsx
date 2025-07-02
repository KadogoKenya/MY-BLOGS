import React, { useState } from 'react'
import { DUMMY_POSTS } from '../../Data'
import postThumbnail from '../../assets/farmTwo.jpg'
import { Link } from 'react-router-dom'
import './Dashboard.css'

function Dashboard() {
  const [posts, setPosts] = useState(DUMMY_POSTS)

  return (
    <section className="dashboard">
      <div className="container dashboard_container">
        {posts.map(post => (
          <article key={post.id} className="dashboard_post">
            <div className="dashboard_post-info">
              <div className="dashboard_post-thumbnail">
                <img src={postThumbnail} alt="image" />
              </div>
              <h5>{post.title}</h5>
            </div>
            <div className="dashboard_post-actions">
              <Link to={`/posts/${post.id}`} className="btn sm">View</Link>
              <Link to={`/posts/${post.id}/edit`} className="btn sm primary">Edit</Link>
              <Link to={`/posts/${post.id}/delete`} className="btn sm danger">Delete</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Dashboard
