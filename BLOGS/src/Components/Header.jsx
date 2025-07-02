import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/BlogLogo.png'
import { HiBars3 } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import './Header.css'


function Header() {
  return (
    <nav className="navbar">
      <div className="container-navbar">
        <NavLink to="/" className="nav-logo">
          <img src={Logo} alt="Logo" />
        </NavLink>

        <ul className="nav_menu">
          <li><NavLink to="/profile" className="nav-link">UserProfile</NavLink></li>
          <li><NavLink to="/create" className="nav-link">Create Posts</NavLink></li>
          <li><NavLink to="/authors" className="nav-link">Authors</NavLink></li>
          <li><NavLink to="/logout" className="nav-link">Logout</NavLink></li>
        </ul>

        <button className="nav_togglebtn">
          <AiOutlineClose />
        </button>
      </div>
    </nav>
  )
}

export default Header