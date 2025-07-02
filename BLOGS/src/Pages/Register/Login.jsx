import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  const changeInputHandler = (e) => {
    setUserData(prevState => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Please enter your credentials to login</p>
        
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input 
              type="email" 
              id="email"
              name="email" 
              value={userData.email}
              onChange={changeInputHandler}
              className="form-input"
              required
              autoComplete="username"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input 
              type="password" 
              id="password"
              name="password" 
              value={userData.password}
              onChange={changeInputHandler}
              className="form-input"
              required
              autoComplete="current-password"
            />
          </div>

          <div className="forgot-password">
            <Link to="/forgot-password" className="forgot-password-link">
              Forgot password?
            </Link>
          </div>
          
          <button type="submit" className="login-button">
            Sign In
          </button>
        </form>
        
        <div className="register-redirect">
          Don't have an account? <Link to="/register" className="register-link">Create one</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;