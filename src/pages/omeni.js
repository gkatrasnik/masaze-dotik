import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Omeni = () => (
  <Layout>
    <SEO
      title="Jernej Švab"
      description="Jernej Švab - kdo sem in kaj počnem"
    />
    <h1 className="text-center font-bold my-8">O MENI - Jernej Švab</h1>
    <div className="flex flex-wrap justify-center md:w-4/5 max-w-screen-md mx-auto py-4 md:py-8 px-4 my-2 ">
      <p className=" pb-6 ">
        Sem Jernej Švab, maser in terapevt. Prihajam iz Tržiča, delam pa v
        svojem masažnem salonu v Kranju. Od malih nog sem povezan s športom.
        Deset let sem v Kolesarskem klubu Kranj treniral in tekmoval v cestnem
        kolesarstvu. Med drugim sem bil tudi član slovenske reprezentance.
        <br />
        <br />
        Po končani karieri sem ostal v klubu in nadaljeval svoje delo v vlogi
        maserja in "soigneurja". Kmalu me je pot popeljala na Dolenjsko, v
        Kolesarski klub Adria Mobil. Sodelovati sem začel tudi s slovensko
        kolesarsko reprezentanco. Po študiju velnesa na Bledu sem razširil svojo
        dejavnost in odprl svoj salon - Masaže Dotik v Kranju. Svoje znanje sem
        razširil s številnimi izobraževanji in tečaji.
        <br />
        <br />
        Danes sem maser Primoža Rogliča in "soigneur" v kolesarski ekipi
        svetovne serije, Jumbo Visma. Ko nisem na poti s Primožem in njegovo
        ekipo, delam v svojem salonu v Kranju. Moje poslanstvo je predvsem, da
        pomagam strankam pri sanaciji vseh vrst poškodb in bolečin ter jim
        pomagam do dobrega počutja.
      </p>
      <StaticImage
        src="../images/jernej_svab_masaze_dotik.jpeg"
        alt="masažni salon Masaže Dotik"
        width={500}
        className="rounded-lg "
        quality={100}
      />
    </div>
  </Layout>
)

export default Omeni
