import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'


export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section section--gradient">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-6">
                <div className="section">
                  <h1 className="title title-center home-page-title is-size-2 has-text-weight-bold">
                    Piotr Roksela
                  </h1>
                  <div className="content home-page-content">
                    <p>
                      Software developer. Minimalism enthusiast.
                    </p>
                    <p>
                      Contact me via <a href="mailto:piotr+kofilabs@roksela.pl">mail</a> or <a href="https://www.linkedin.com/in/piotr-roksela">linkedin</a>.
                      <br />
                      Follow me on <a href="https://github.com/roxel">github</a> and <a href="https://www.instagram.com/therocksels/">instagram</a>.
                    </p>
                  </div>
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