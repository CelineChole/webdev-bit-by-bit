/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header/header"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              tagline
              author
              contacts {
                linkedin
                github
                portfolio
              }
            }
          }
        }
      `}
      render={(data) => (
        <>
          <Header
            siteTitle={data.site.siteMetadata.title}
            tagline={data.site.siteMetadata.tagline}
            author={data.site.siteMetadata.author}
            contacts={data.site.siteMetadata.contacts}
          />
          <div
            style={{
              margin: `0 auto`,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
            }}
          >
            <main className="main">{children}</main>
            <footer>
              <hr />
              <div>
                © {new Date().getFullYear()}{" "}
                <a
                  target="_blank"
                  href="https://celinechole.com/"
                  rel="noreferrer"
                >
                  Céline Cholé
                </a>
                {` `}
                Built with
                {` `}
                <a
                  target="_blank"
                  href="https://www.gatsbyjs.org"
                  rel="noreferrer"
                >
                  Gatsby
                </a>
              </div>
            </footer>
          </div>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
