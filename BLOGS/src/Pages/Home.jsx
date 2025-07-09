import React from 'react'
import Posts from '../Components/Posts/Posts'
import PostDetail from './PostDetails/PostDetail'
import AuthorPosts from './AuthorPosts/AuthorPosts'

//  import AuthorPosts from "./Pages/AuthorPosts/AuthorPosts";
import CategoryPosts from "../Pages/CategoryPosts/CategoryPosts";
import Register from './Register/Register';
import Authors from './AuthorPosts/Authors';
import UserProfile from './Profile/UserProfile';
import Dashboard from './DashboardPage/Dashboard';
import CreatePost from './CreateEditDeletePosts/CreatePost';
import LandingPage from './LandingPage';




function Home() {
  return (
    <div>
      {/* <LandingPage /> */}
      <Posts />
      {/* <PostDetail /> */}
      {/* <AuthorPosts /> */}
      {/* <CategoryPosts />  */}
      {/* <Register /> */}
      {/* <Authors /> */}
      {/* <UserProfile /> */}
      {/* <Dashboard /> */}
      {/* <CreatePost /> */}
    </div>
  )
}

export default Home