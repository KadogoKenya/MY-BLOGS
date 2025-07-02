import React, { useState } from 'react';
import PostItems from './PostItems';
import EducationOne from '../../assets/EducationOne.jpg';
import EducationTwo from '../../assets/EducationTwo.jpg';
import groceryOne from '../../assets/groceryOne.jpg';
import groceryTwo from '../../assets/groceryTwo.jpg';
import groceryThree from '../../assets/groceryThree.jpg';
import farmOne from '../../assets/farmOne.jpg';
import farmTwo from '../../assets/farmTwo.jpg';
import farmThree from '../../assets/farmThree.jpg';
import { DUMMY_POSTS } from '../../Data'
import './Posts.css'


function Posts() {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  
  return (
    <section className="posts">
        {posts.length > 0 ? <div className="posts_container">
            {posts.map(({id, thumbnail, category,title, description, authorID}) => (
         <PostItems key={id} postID={id} thumbnail={thumbnail} category={category} 
            title={title} description={description} authorID={authorID} />
        ))}
        </div> : <h2>No Posts Found</h2> }

     
    </section>
  );
}

export default Posts;