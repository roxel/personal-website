import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'

export default class SprintIndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content is-10 is-offset-1">
              <h2 className="has-text-weight-bold is-size-2">Sprints</h2>
              <p>
                Sprints are little projects I'm working on every day. Possible areas of interest are very wide.
                Many of them will be technological or related to business, but some may be personal and concern self-improvement in general.
                Here I document all sprints, both finished and in progress.
              </p>
              {posts
                .map(({ node: post }) => (
                  <div
                    key={post.id}
                    style={{ marginBottom: "1.5em" }}
                  >
                    <h3
                      style={{ marginBottom: "0.25em" }}
                    >
                      <Link className="has-text-primary" to={post.fields.slug}>
                        {post.frontmatter.title}
                      </Link>
                      <span> &bull; </span>
                      <small>{post.frontmatter.date} {post.frontmatter.finished && ' – ' + post.frontmatter.finished}</small>
                    </h3>
                    <p>{post.frontmatter.objective}</p>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}


SprintIndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const sprintPageQuery = graphql`
  query SprintIndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "sprint-post" } }}
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            objective
            templateKey
            date(formatString: "MMM DD, YYYY")
            finished(formatString: "MMM DD, YYYY")
          }
        }
      }
    }
  }
`
