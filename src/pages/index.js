import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../images/banner-photo.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Domov" />
    <div
      className="w-screen"
      style={{
        backgroundImage: `url(${Banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: "calc(100vh - 4rem)",
      }}
    >
      <div className="h-full flex flex-wrap-reverse justify-evenly md:flex-nowrap py-4 md:py-8 px-4  ">
        <div className="flex flex-col justify-center w-64">
          <h1 className="font-semibold tracking-wide leading-relaxed text-white ">
            MASAŽE DOTIK
          </h1>
          <h2 className="text-2xl tracking-wide text-white ">
            Odpravimo bolečine in poskrbimo za dobro počutje.
          </h2>
          <p className="text-xl font-light text-white"></p>
          <Link to={`/kontakt`}>
            <p className="text-xl  text-dotikDarkBrown border w-40 p-2 text-center  my-4 border-dotikExtraDarkBrown">
              KONTAKT
            </p>
          </Link>
        </div>

        <div className="flex flex-col justify-center">
          <StaticImage
            src="../images/jernej_svab_masaze_dotik_2.jpeg"
            alt="Jernej Švab, Masaže Dotik"
            height={260}
            width={260}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
    <div className="flex flex-wrap justify-center md:flex-nowrap w-4/5 mx-auto py-4 md:py-8 px-4 my-12 ">
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
          ki jih uporabljam, so pridobljene z leti izkušenj in izobraževanj.
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
