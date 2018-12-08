import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"
import logo from '../img/logo-pr.png'


import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
          site {
            siteMetadata {
              title,
              description,
            }
          }
        }
    `}
    render={data => (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content={data.site.siteMetadata.description} />
          <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700&amp;subset=latin-ext"
                rel="stylesheet" />
          <link href={logo} rel="icon" type="image/gif" />
        </Helmet>
        <Navbar />
        <div>{children}</div>
      </div>
    )}
  />
)

export default TemplateWrapper
