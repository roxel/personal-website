import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo-pr.png'


class Navbar extends React.Component {
  render() {
    return (
      <nav className="navigation" role="navigation" aria-label="main navigation">
        <div className="container is-centered">
          <Link to="/" title="Logo" className="navbar-logo">
            <img src={logo} alt="PR" />
          </Link>
          <div className="level is-mobile">
            {/* <Link to="/sprints" className="level-item navbar-button">
              Sprints
            </Link> */}
            <Link to="/about" className="level-item navbar-button">
              About
            </Link>
          </div>
        </div>
      </nav>
    )
  };
}

export default Navbar
