import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const navigate = useNavigate();

  const changeInputHandler = (e) => {
    setUserData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userData.password !== userData.password2) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:5432/signup", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: userData.name,
          email: userData.email,
          password: userData.password
        })
      });

      const data = await response.json();

      if (response.ok) {
        alert("Signup is successful");
        navigate('/login');
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Create Your Account</h2>

        <form className="register-form" onSubmit={handleSubmit}>
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
