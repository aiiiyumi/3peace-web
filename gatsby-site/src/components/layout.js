/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header/header"
import "./layout.scss"
import Footer from "./footer"
import ScrollTop from "./scroll-top"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query strapiBlog {
      site {
        siteMetadata {
          title
        }
      }

    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
        }}
        className="content"
      >
        <main>{children}</main>
        <Footer />
        <ScrollTop showBelow={50} />
      </div>
    </>
  )
}

export default Layout
