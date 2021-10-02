import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Domov" />
    <h1 className="text-center mb-8">Masaže Dotik</h1>

    <div className="flex flex-wrap-reverse justify-center md:flex-nowrap bg-gray-100 border-4 py-4 md:py-8 px-4 m-2 rounded-lg">
      <div className="p-4 md:w-1/2 ">
        <div className="relative md:top-2 lg:top-8">
          <p className="text-lg">
            <b>Telefon: </b>
            <a href="tel:040996397" className="text-lg">
              040 996 397
            </a>
          </p>
          <p className="text-lg">
            <b>Email: </b>
            <a href="mailto:masaze.dotik@gmail.com" className="text-lg">
              masaze.dotik@gmail.com
            </a>
          </p>
          <p className="text-lg">
            <b>Naslov: </b>Planina 3, 4000 Kranj
          </p>
          <p className="text-lg">
            <b>Delovni čas: </b>Po dogovoru
          </p>
        </div>
      </div>
      <StaticImage
        src="../images/jernej_svab_masaze_dotik_2.jpeg"
        alt="Jernej Švab, Masaže Dotik"
        width={400}
        className="rounded-lg"
      />
    </div>
    <div className="flex flex-wrap justify-center md:flex-nowrap bg-gray-100 border-4 py-4 md:py-8 px-4 m-2 rounded-lg">
      <StaticImage
        src="../images/pri-delu.jpg"
        alt="Jernej Švab, Masaže Dotik"
        width={400}
        className="rounded-lg"
      />
      <p className="p-4 md:w-1/2 ">
        Sem Jernej Švab, maser in terapevt. Pri svojem delu skupaj s stranko
        najprej opredeliva težavo, nato pa s celostnim pristopom poiščemo vzrok
        problema in ga odpravimo. Pri delu uporabljam različne tehnike in
        izkušnje pridobljene z leti dela in izobraževanj.
      </p>
    </div>
  </Layout>
)

export default IndexPage
