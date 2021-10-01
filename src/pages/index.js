import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Domov" />
    <h1 className="text-center mb-8">Masaže Dotik</h1>
    <div className="flex flex-wrap-reverse justify-center md:flex-nowrap">
      <p className="p-4 md:w-1/2 ">
        Sem Jernej Švab, maser in terapevt. Skupaj s stranko najprej opredelim
        problem, potem pa s celostnim pristopom poizkušam najti vzrok problema
        in ga odpraviti. Pri delu uporabljam različne tehnike in izkušnje
        pridobljene z leti dela in izobraževanj.
      </p>
      <StaticImage
        src="../images/jernej_svab_masaze_dotik_2.jpeg"
        alt="Jernej Švab, Masaže Dotik"
        width={400}
        constrained
      />
    </div>
  </Layout>
)

export default IndexPage
