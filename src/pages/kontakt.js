import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Kontakt = props => (
  <Layout>
    <SEO title="Kontakt" />
    <h1 className="text-center mb-8">Kontakt</h1>
    <p>
      <b>Delovni čas: </b>Vsak delovni dan, po dogovoru.
    </p>
    <p>
      <b>Telefon: </b>
      <a href="tel:040996397">040 996 397</a>
    </p>
    <p>
      <b>Email: </b>
      <a href="mailto:masaze.dotik@gmail.com">masaze.dotik@gmail.com</a>
    </p>
    <p>
      <b>Naslov: </b>Planina 3, 4000 Kranj
    </p>
  </Layout>
)

export default Kontakt
