import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Domov" />
    <h2>O meni</h2>
    <p>Sem Jernej Švab, maser</p>
    <br />
    <h2>Kaj počnem</h2>
    <p>Ukvarjam se z terapevtskimi, športnimi in klasičnimi masažami</p>
    <p>
      Pri delu z strankami uporabljam celosten pristop pri reševanju problema
    </p>
    <br />
    <h2> Kje me najdete</h2>
    <p>Moj salon se nahaja na naslovu Planina 3, 4000 Kranj</p>
  </Layout>
)

export default IndexPage
