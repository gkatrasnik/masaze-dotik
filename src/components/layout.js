/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "./footer"
import Header from "./header"
import Cookies from "./cookies"

const Layout = ({ children }) => {
  const [cookiesOpen, setCookiesOpen] = useState(false)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const closeCookies = () => {
    setCookiesOpen(false)
  }

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header siteTitle={data.site.siteMetadata.title} />
        {cookiesOpen && <Cookies closeCookies={closeCookies} />}
        <main className="flex flex-col flex-grow self-center">{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
