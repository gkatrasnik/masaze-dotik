/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "./footer"
import Header from "./header"
import CookieConsent from "react-cookie-consent"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header siteTitle={data.site.siteMetadata.title} />
        <CookieConsent
          style={{
            background: "#404040",
            justifyContent: "center",
            alignItems: "center",
          }}
          buttonText="V redu"
          buttonStyle={{
            color: "white",
            backgroundColor: "#404040",
            borderRadius: "5%",
            border: "2px solid white",
          }}
        >
          Spletno mesto uporablja piškotke. Z nadaljnjo uporabo spletnega mesta
          soglašate s piškotki.
        </CookieConsent>

        <main className="flex flex-col  flex-grow w-full self-center">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
