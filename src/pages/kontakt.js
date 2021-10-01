import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Kontakt = props => (
  <Layout>
    <SEO title="Storitve" />
    <h1>Kontakt</h1>
    <p>
      <b>Delovni čas: </b>Vsak delovni dan, po dogovoru.
    </p>
    <p>
      <b>Telefon: </b>
      <a href="tel:555-555-5555">555-555-5555</a>
    </p>
    <p>
      <b>Email: </b>
      <a href="mailto:someone@example.com">someone@example.com</a>
    </p>
    <p>
      <b>Naslov: </b>Planina 3, 4000 Kranj
    </p>
  </Layout>
)

export default Kontakt
