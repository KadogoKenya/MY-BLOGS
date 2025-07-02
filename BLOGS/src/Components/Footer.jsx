import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footerList">
      <ul className="footer-categories">
        <li><NavLink to="/posts/categories/Agriculture" className="footer-link">Agriculture</NavLink></li>
        <li><NavLink to="/posts/categories/Business" className="footer-link">Business</NavLink></li>
        <li><NavLink to="/posts/categories/Education" className="footer-link">Education</NavLink></li>
        <li><NavLink to="/posts/categories/Entertainment" className="footer-link">Entertainment</NavLink></li>
        <li><NavLink to="/posts/categories/Art" className="footer-link">Art</NavLink></li>
        <li><NavLink to="/posts/categories/Investment" className="footer-link">Investment</NavLink></li>
        <li><NavLink to="/posts/categories/Uncategorised" className="footer-link">Uncategorised</NavLink></li>
        <li><NavLink to="/posts/categories/Weather" className="footer-link">Weather</NavLink></li>
      </ul>
      <div className="copyRight">
        <p>&copy; {new Date().getFullYear()} BlogSphere. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
