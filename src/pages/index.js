import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import github from '../img/github-icon.svg'
import linkedin from '../img/ln-icon.png'
import instagram from '../img/instagram-icon.png'
import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content" style={{ maxWidth: '400px' }}>
              <h1 className="has-text-weight-bold is-size-2">Piotr Roksela</h1>
              <p>
                Hi! I'm a Python Developer from southern Poland.
                Currently working for <a href="https://www.boldare.com/">Boldare</a>.
                Owner of <a href="http://kofilabs.com/">KofiLabs</a>.
              </p>
              <p>
                Contact me at: <a href='mailto&#58;p%69o%74%72 [a&#37;&#55;4&#93; r%6F&#107;sela&#37;2Ep&#37;&#54;C'>&#112;iotr@rok&#115;e&#108;a&#46;p&#108;</a>.
              </p>
              <a
                href="https://github.com/roxel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" style={{ height: '20px' }} />
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/piotr-roksela"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={linkedin} alt="LinkedIn" style={{ height: '20px' }} />
                </span>
              </a>
              <a
                href="https://www.instagram.com/therocksels/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={instagram} alt="Instagram" style={{ height: '20px' }} />
                </span>
              </a>
              <div className="columns">
                <div className="column">
                  <Link to="/sprints">
                    Sprints
                  </Link>
                </div>
                <div className="column">
                  <Link to="/blog">
                    Blog
                  </Link>
                </div>
                <div className="column">
                  <Link to="/about">
                    About
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}