import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthorPosts from './Pages/AuthorPosts/AuthorPosts';
import Authors from './Pages/AuthorPosts/Authors';
import CategoryPosts from './Pages/CategoryPosts/CategoryPosts';
import CreatePost from './Pages/CreateEditDeletePosts/CreatePost';
import Dashboard from './Pages/DashboardPage/Dashboard';
import DeletePost from './Pages/CreateEditDeletePosts/DeletePost';
import EditPost from './Pages/CreateEditDeletePosts/EditPost';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Home from './Pages/Home';
import Login from './Pages/Register/Login';
import Logout from './Pages/Register/Logout';
import PostDetail from './Pages/PostDetails/PostDetail';
import Register from './Pages/Register/Register';
import UserProfile from './Pages/Profile/UserProfile';


import './App.css';
import './index.css';
import Header from './Components/Header';
import Footer from './Components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <Footer /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts/:id" element={<PostDetail />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="profile/:id" element={<UserProfile />} />
        <Route path="authors" element={<Authors />} />
        <Route path="create" element={<CreatePost />} />
        <Route path="posts/categories/:category" element={<CategoryPosts />} />
        <Route path="posts/users/:id" element={<AuthorPosts />} />
        <Route path="delete-post/:id" element={<DeletePost />} />
        <Route path="myposts/:id" element={<Dashboard />} />
        <Route path="posts/:id/edit" element={<EditPost />} />
        <Route path="logout" element={<Logout />} />
    
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
