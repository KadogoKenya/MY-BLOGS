// src/pages/LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import Footer from '../Components/Footer';

function LandingPage() {
  return (
    <>
    <div className="landing-container">
      {/* Header */}
      <header className="landing-header">
        <div className="header-content">
          <h1>Welcome to BlogSpace</h1>
          <p className="tagline">Share your stories with the world</p>
          <div className="auth-buttons">
            <Link to="/login" className="btn sign-in">Sign In</Link>
            <Link to="/register" className="btn create-account">Create Account</Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="landing-main">
        <section className="intro-section">
          <h2>Publish your passions, your way</h2>
          <p>Create a unique and beautiful blog easily.</p>
        </section>

        <section className="features-section">
          <div className="feature-card">
            <div className="feature-icon">✏️</div>
            <h3>Easy to use</h3>
            <p>Publish instantly from any device</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Customizable</h3>
            <p>Design your perfect blog</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌎</div>
            <h3>Reach your audience</h3>
            <p>Connect with readers everywhere</p>
          </div>
        </section>

        <section className="cta-section">
          <h2>Ready to start your blogging journey?</h2>
          <Link to="/register" className="btn primary-cta">Get Started</Link>
        </section>
      </main>
    </div>
      <Footer />
      </>
  );
}

export default LandingPage;