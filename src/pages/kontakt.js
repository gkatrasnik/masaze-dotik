import React from "react"
import { Link } from "gatsby"
import { FaFacebook, FaInstagram } from "react-icons/fa"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Kontakt = props => (
  <Layout>
    <SEO title="Kontakt" />
    <h1 className="text-center mb-8">Kontakt</h1>

    <div className="flex flex-col justify-center md:flex-nowrap py-4 md:py-8 px-4 my-2 sm:w-2/3 mx-auto">
      <p className="text-lg">
        <b>DOTIK, MASAŽNE STORITVE, JERNEJ ŠVAB S.P.</b>
      </p>
      <br />
      <p className="text-lg">
        <b>Naslov: </b>Planina 3, 4000 Kranj
      </p>
      <p className="text-lg">
        <b>Delovni čas: </b>Po dogovoru.
      </p>
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
    </div>
    <div className="flex flex-col justify-center my-4">
      <Link to={`https://www.facebook.com/dotikmasaze`} className="px-2 my-2">
        <FaFacebook size={"5em"} className="mx-auto " />
      </Link>
      <Link
        to={`https://www.instagram.com/masaze.dotik/`}
        className="px-2 my-2"
      >
        <FaInstagram size={"5em"} className="mx-auto " />
      </Link>
    </div>
  </Layout>
)

export default Kontakt
