import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404</h1>
    <p>Ups, ta stran ne obstaja...</p>
    <Link to={`/`}>
      <p className="block mt-4 mr-4 md:text-lg md:inline-block md:mt-0  ">
        DOMOV
      </p>
    </Link>
  </Layout>
)

export default NotFoundPage
