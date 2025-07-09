import React , {useState} from 'react'
import { DUMMY_POSTS } from '../../Data'
import PostItems from '../../Components/Posts/PostItems'
import './AuthorPosts.css'
import Footer from '../../Components/Footer/Footer'

function AuthorPosts() {
  const [posts,setPosts] = useState(DUMMY_POSTS)
  return (
    <>
        <section className="author-posts">
            {posts.length > 0 ? <div className="author-posts__grid">
                {posts.map(({id, thumbnail, category,title, description, authorID}) => (
             <PostItems key={id} postID={id} thumbnail={thumbnail} category={category} 
                title={title} description={description} authorID={authorID} />
            ))}
            </div> : <h2 className='center'>No Posts Found</h2> }
    
         
        </section>
        <Footer />
        </>
  )
}

export default AuthorPosts