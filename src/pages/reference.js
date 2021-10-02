import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Reference = props => (
  <Layout>
    <SEO title="Reference" />
    <h1 className="text-center mb-8">Reference</h1>
    <div className="bg-gray-100 border-4  p-3  rounded-lg">
      <div className="flex flex-wrap-reverse justify-center md:flex-nowrap py-4 md:py-2  my-2 ">
        <div className="p-4 md:w-1/2 text-center">
          <h2 className=" relative top-1/3">Primož Roglič</h2>
        </div>
        <StaticImage
          src="../images/tokio_primoz_roglic_jernej_svab.jpeg"
          alt="Primož Roglič olimpijske igre Tokio 2021"
          height={200}
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-wrap justify-center md:flex-nowrap py-4 md:py-2  my-2 ">
        <StaticImage
          src="../images/jumbo-visma.jpg"
          alt="Jumbo Visma cycling team"
          height={200}
          className="rounded-lg"
        />
        <div className="p-4 md:w-1/2 text-center">
          <h2 className=" relative top-1/3">Jumbo Visma Pro Cycling Team</h2>
        </div>
      </div>
      <div className="flex flex-wrap-reverse justify-center md:flex-nowrap py-4 md:py-2  my-2 ">
        <div className="p-4 md:w-1/2 text-center">
          <h2 className=" relative top-1/3">Kolesarska zveza Slovenije</h2>
        </div>
        <StaticImage
          src="../images/tokio_primoz_roglic_jernej_svab_medalja.jpeg"
          alt="Primož Roglič olimpijske igre Tokio 2021 medalja, Jernej Švab"
          height={200}
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-wrap justify-center md:flex-nowrap py-4 md:py-2  my-2 ">
        <StaticImage
          src="../images/adria-mobil.jpg"
          alt="Kolesarski klub Adria Mobil"
          height={200}
          className="rounded-lg"
        />
        <div className="p-4 md:w-1/2 text-center">
          <h2 className=" relative top-1/3">Kolesarski Klub Adria Mobil</h2>
        </div>
      </div>
    </div>
  </Layout>
)

export default Reference
