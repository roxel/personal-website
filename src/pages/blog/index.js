import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'

export default class BlogIndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-8 is-offset-2">
                <h1 className="title is-size-2 has-text-weight-bold">
                  Blog
                </h1>
                <div className="content">
                  {posts
                    .map(({ node: post }) => (
                      <div
                        key={post.id}
                        className="blog-index-item"
                      >
                        <h2 className="is-size-4 has-text-weight-bold">
                          <Link className="has-text-primary" to={post.fields.slug}>
                            {post.frontmatter.title}
                          </Link>
                        </h2>
                        <h3 className="is-size-5">
                          <small>{post.frontmatter.date}</small>
                        </h3>
                        <p>
                          {post.excerpt}
                        </p>
                        <div>
                          <Link className="button is-small" to={post.fields.slug}>
                            Keep Reading →
                          </Link>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

BlogIndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const blogPageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
