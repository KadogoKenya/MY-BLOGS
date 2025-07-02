import React, { useState } from 'react';
import './Header.css'


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container-navbar">
        <NavLink to="/" className="nav-logo">
          <img src={Logo} alt="Logo" />
        </NavLink>

        <ul className={`nav_menu ${isMenuOpen ? 'active' : ''}`}>
          <li><NavLink to="/profile/sdfsdf" className="nav-link">UserProfile</NavLink></li>
          <li><NavLink to="/create" className="nav-link">Create Posts</NavLink></li>
          <li><NavLink to="/authors" className="nav-link">Authors</NavLink></li>
          <li><NavLink to="/logout" className="nav-link">Logout</NavLink></li>
        </ul>

        <button className="nav_togglebtn" onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <AiOutlineClose /> : <HiBars3 />}
        </button>
      </div>
    </nav>
  )
}