import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const SprintPostTemplate = ({
  content,
  contentComponent,
  date,
  finished,
  objective,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light has-text-primary">
              {title}
            </h1>
            <div
              style={{ marginBottom: "2em" }}
            >
              <div>
                <strong>Date started: </strong>
                {date}
              </div>
              <div>
                <strong>Date finished: </strong>
                {finished}
              </div>
              <div>
                <strong>Objective: </strong>
                {objective}
              </div>
            </div>
            <PostContent content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

SprintPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const SprintPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SprintPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet
            titleTemplate="%s | Sprints"
          >
            <title>{`${post.frontmatter.title}`}</title>
            <meta name="description" content={`${post.frontmatter.objective}`} />
          </Helmet>
        }
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        finished={post.frontmatter.finished}
        objective={post.frontmatter.objective}
      />
    </Layout>
  )
}

SprintPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default SprintPost

export const sprintPageQuery = graphql`
  query SprintPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        finished(formatString: "MMMM DD, YYYY")
        title
        objective
      }
    }
  }
`
