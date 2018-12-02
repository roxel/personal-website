import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo-pr.png'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" title="Logo">
          <img src={logo} alt="PR" />
        </Link>
      </div>
      <div className="navbar-end">
        <Link className="navbar-item" to="/sprints">
          Sprints
        </Link>
        <Link className="navbar-item" to="/blog">
          Blog
        </Link>
        <Link className="navbar-item" to="/about">
          About
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
