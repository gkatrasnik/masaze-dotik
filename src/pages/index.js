import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../images/banner-photo.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Domov" />
    <div
      className="w-full"
      style={{
        backgroundImage: `url(${Banner})`,
        backgroundSize: "cover",
        height: "91vh",
      }}
    >
      <div className="h-full flex flex-wrap-reverse justify-evenly md:flex-nowrap py-4 md:py-8 px-4  ">
        <div className="p-4 flex justify-center ">
          <div className="flex flex-col justify-center">
            <p className="text-lg text-white">
              Telefon:
              <a href="tel:040996397" className="text-xl font-extralight">
                <b> 040 996 397</b>
              </a>
            </p>
            <p className="text-lg text-white">
              Email:
              <a
                href="mailto:masaze.dotik@gmail.com"
                className="text-xl font-extralight"
              >
                <b> masaze.dotik@gmail.com </b>
              </a>
            </p>
            <p className="text-xl font-extralight text-white">
              Naslov:<b> Planina 3, 4000 Kranj </b>
            </p>
            <p className="text-xl font-extralight text-white">
              Delovni čas:<b> Po dogovoru </b>
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <StaticImage
            src="../images/jernej_svab_masaze_dotik_2.jpeg"
            alt="Jernej Švab, Masaže Dotik"
            height={300}
            width={300}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
    <div className="flex flex-wrap justify-center md:flex-nowrap w-4/5 mx-auto py-4 md:py-8 px-4 my-8 ">
      <StaticImage
        src="../images/pri-delu.jpg"
        alt="Jernej Švab, Masaže Dotik"
        width={400}
        height={300}
        className="rounded"
      />
      <div className="p-4 md:w-1/2 flex flex-col justify-center">
        <p>
          <b>Jernej Švab</b> maser in terapevt.
        </p>

        <p>
          Pri svojem delu skupaj s stranko opredeliva težavo, s celostnim
          pristopom poiščeva vzrok problema in ga odpraviva. Tehnike in znanja
          ki jih uporabljam, so pridobljena z leti izkušenj in izobraževanj.
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
