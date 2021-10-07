import React from "react"

import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Reference = props => (
  <Layout>
    <SEO
      title="Reference"
      description="S svojim delom so do boljšega počutja in sanacije poškodb pomagal tudi številnim vrhunskim športnikom."
    />
    <h1 className="text text-center font-bold my-8">REFERENCE</h1>
    <div className="flex my-auto flex-wrap  m-6 max-w-screen-md mx-auto  ">
      <div className="flex justify-start flex-col  w-96 mx-auto  p-4   my-2 ">
        <StaticImage
          src="../images/tokio_primoz_roglic_jernej_svab.jpeg"
          alt="Primož Roglič olimpijske igre Tokio 2021"
          className="rounded"
        />
        <div className="p-4 text-center">
          <h2>Primož Roglič</h2>
        </div>
      </div>
      <div className="flex justify-start flex-col w-96 mx-auto  p-4   my-2 ">
        <StaticImage
          src="../images/jumbo-visma.jpg"
          alt="Jumbo Visma cycling team"
          className="rounded"
        />
        <div className="p-4  text-center">
          <h2>Jumbo Visma Pro Cycling</h2>
        </div>
      </div>
      <div className="flex justify-start flex-col w-96 mx-auto  p-4   my-2 ">
        <StaticImage
          src="../images/tokio_primoz_roglic_jernej_svab_medalja.jpeg"
          alt="Primož Roglič olimpijske igre Tokio 2021 medalja, Jernej Švab"
          className="rounded"
        />
        <div className="p-4  text-center">
          <h2>Kolesarska zveza Slovenije</h2>
        </div>
      </div>
      <div className="flex justify-start flex-col  w-96 mx-auto  p-4   my-2 ">
        <StaticImage
          src="../images/adria-mobil.jpg"
          alt="Kolesarski klub Adria Mobil"
          className="rounded"
        />
        <div className="p-4 text-center">
          <h2>Kolesarski klub Adria Mobil</h2>
        </div>
      </div>
    </div>
  </Layout>
)

export default Reference
