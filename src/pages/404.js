import React from 'react'
import Layout from '../components/Layout'
import {Link} from "gatsby";

const NotFoundPage = () => (
  <Layout>
    <section className="section section--gradient">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-6">
            <div className="section">
              <h1 className="title title-center home-page-title is-size-2 has-text-weight-bold">
                404 Not Found
              </h1>
              <div className="content home-page-content">
                <p>
                  Sorry, this page doesn't exist.
                </p>
                <p>
                  If you were trying to check the sprint I'm currently in then go to&nbsp;
                  <Link to="/sprints">
                    --> Sprints
                  </Link><br />
                  To read some post on my blog visit&nbsp;
                  <Link to="/blog">
                    --> Blog
                  </Link><br />
                  If you don't have any idea what this website is start with&nbsp;
                  <Link to="/about">
                    --> About
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
