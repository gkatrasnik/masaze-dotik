import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Reference = props => (
  <Layout>
    <SEO title="Reference" />
    <h1 className="text-center my-8">Reference</h1>
    <div>
      <div className="flex flex-col w-4/5 mx-auto justify-center  py-4 md:py-2  my-2 ">
        <StaticImage
          src="../images/tokio_primoz_roglic_jernej_svab.jpeg"
          alt="Primož Roglič olimpijske igre Tokio 2021"
          width={400}
          className="rounded"
        />
        <div className="p-4 text-center">
          <h2>Primož Roglič</h2>
        </div>
      </div>
      <div className="flex justify-center flex-col w-4/5 mx-auto  py-4 md:py-2  my-2 ">
        <StaticImage
          src="../images/jumbo-visma.jpg"
          alt="Jumbo Visma cycling team"
          width={400}
          className="rounded"
        />
        <div className="p-4  text-center">
          <h2>Jumbo Visma Pro Cycling Team</h2>
        </div>
      </div>
      <div className="flex  justify-center flex-col w-4/5 mx-auto  py-4 md:py-2  my-2 ">
        <StaticImage
          src="../images/tokio_primoz_roglic_jernej_svab_medalja.jpeg"
          alt="Primož Roglič olimpijske igre Tokio 2021 medalja, Jernej Švab"
          width={400}
          className="rounded"
        />
        <div className="p-4  text-center">
          <h2>Kolesarska zveza Slovenije</h2>
        </div>
      </div>
      <div className="flex  justify-center flex-col w-4/5 mx-auto  py-4 md:py-2  my-2 ">
        <StaticImage
          src="../images/adria-mobil.jpg"
          alt="Kolesarski klub Adria Mobil"
          width={400}
          className="rounded"
        />
        <div className="p-4 text-center">
          <h2>Kolesarski Klub Adria Mobil</h2>
        </div>
      </div>
    </div>
  </Layout>
)

export default Reference
