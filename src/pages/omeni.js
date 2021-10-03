import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Omeni = () => (
  <Layout>
    <SEO title="O meni" />
    <h1 className="text-center my-8">O meni - Jernej Švab</h1>
    <div className="flex flex-wrap justify-center md:w-4/5 mx-auto p-3 md:p-8">
      <p className=" pb-6 ">
        Sem Jernej Švab, maser in terapevt. Prihajam iz Tržiča, delam pa v
        svojem masažnem salonu v Kranju. Od malih nog sem povezan s športom. 10
        let sem v kolesarskem klubu Kranj treniral in tekmoval v cestnem
        kolesarstvu. Med drugim sem bil sem bil tudi član slovenske
        reprezentance.
        <br />
        <br />
        Po končani karieri sem ostal v klubu in nadaljeval svoje delo v vlogi
        maserja in "soigneurja". Kmalu me je pot popeljala na dolenjsko, v
        Kolesarski Klub Adria Mobil. Sodelovati sem začel tudi z reprezentacnami
        Kolesarske zveze Slovenije. Po študiju velnesa na Bledu sem razširil
        svojo dejavnost in odprl svoj salon - Masaže Dotik v Kranju. Svoje
        znanje sem razširil še z številnimi izobraževanji in tečaji.
        <br />
        <br />
        Danes sem maser Primoža Rogliča in soigneur v ekipi kolesarske svetovne
        serije Jumbo Visma. Ko nisem na poti s Primožem in njegovo ekipo, delam
        v svojem salonu na Planini v Kranju. Moje poslanstvo je predvsem da
        pomagam strankam pri sanaciji vseh vrst poškodb in bolečin, ter jim
        pomagam do dobrega počutja.
      </p>
      <StaticImage
        src="../images/jernej_svab_masaze_dotik.jpeg"
        alt="masažni salon Masaže Dotik"
        width={500}
        className="rounded-lg p-2"
      />
    </div>
  </Layout>
)

export default Omeni
