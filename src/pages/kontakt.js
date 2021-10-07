import React from "react"
import { FaFacebook, FaInstagram } from "react-icons/fa"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Kontakt = props => (
  <Layout>
    <SEO
      title="Kontakt"
      description="Pokličite in skupaj poiščimo termin za vaš obisk"
    />
    <h1 className="text-center font-bold my-8">KONTAKT</h1>

    <div className="flex flex-col justify-center py-4 sm:py-8 px-4 my-2 w-full max-w-md mx-auto">
      <p className="text-lg">
        <b>DOTIK, MASAŽNE STORITVE, JERNEJ ŠVAB S.P.</b>
      </p>
      <br />
      <p className="text-lg">
        <b>Telefon: </b>
        <a href="tel:+386 40 996 397" className="text-xl font-bold">
          +386 40 996 397
        </a>
      </p>
      <p className="text-lg">
        <b>Email: </b>
        <a href="mailto:masaze.dotik@gmail.com" className="text-xl font-bold">
          masaze.dotik@gmail.com
        </a>
      </p>
      <p className="text-lg">
        <b>Naslov: </b>Planina 3, 4000 Kranj
      </p>
      <p className="text-lg">
        <b>Delovni čas: </b>po dogovoru
      </p>
    </div>
    <div className="flex flex-col sm:flex-row justify-center my-4">
      <a href="https://www.facebook.com/dotikmasaze" className="px-2 my-2">
        <FaFacebook size={"5em"} className="mx-auto " />
      </a>
      <a href="https://www.instagram.com/masaze.dotik" className="px-2 my-2">
        <FaInstagram size={"5em"} className="mx-auto " />
      </a>
    </div>
  </Layout>
)

export default Kontakt
