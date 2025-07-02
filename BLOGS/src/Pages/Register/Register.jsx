import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const changeInputHandler = (e) => {
    setUserData(prevState => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Create Your Account</h2>
        
        <form className="register-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input 
              type="text" 
              id="name"
              name="name" 
              value={userData.name}
              onChange={changeInputHandler}
              className="form-input"
              required
            />
          </div>
          
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
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password2" className="form-label">Confirm Password</label>
            <input 
              type="password" 
              id="password2"
              name="password2" 
              value={userData.password2}
              onChange={changeInputHandler}
              className="form-input"
              required
            />
          </div>
          
          <button type="submit" className="register-button">
            Register Now
          </button>
        </form>
        
        <div className="login-redirect">
          Already have an account? <Link to="/login" className="login-link">Sign In</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;