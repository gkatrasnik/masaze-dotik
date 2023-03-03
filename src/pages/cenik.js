import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Cenik = props => (
  <Layout>
    <SEO title="Cenik" description="Cenik storitev v masažnem salonu Dotik" />
    <h1 className="text-center font-bold my-8">CENIK</h1>
    <div className="py-4 md:py-8 px-4 my-2 w-full max-w-screen-md mx-auto ">
      <table className="table-auto w-full sm:w-3/4 mx-auto">
        <thead>
          <tr>
            <th className=" sm:w-40"></th>
            <th className=" sm:w-40 ">Čas</th>
            <th className=" sm:w-40 ">Cena</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Terapevtska masaža</th>
            <td className=" text-center">30 min</td>
            <td className=" text-center">30 €</td>
          </tr>
          <tr>
            <th></th>
            <td className=" text-center">60 min</td>
            <td className=" text-center">50 €</td>
          </tr>
          <tr>
            <th></th>
            <td className=" text-center">90 min</td>
            <td className=" text-center">70 €</td>
          </tr>

          <tr className="border-t-2 border-black ">
            <th>Športna masaža</th>
            <td className=" text-center">30 min</td>
            <td className=" text-center">30 €</td>
          </tr>
          <tr>
            <th></th>
            <td className=" text-center">60 min</td>
            <td className=" text-center">50 €</td>
          </tr>
          <tr>
            <th></th>
            <td className=" text-center">90 min</td>
            <td className="text-center">70 €</td>
          </tr>

          <tr className="border-t-2 border-black ">
            <th>Klasična masaža</th>
            <td className=" text-center">60 min</td>
            <td className=" text-center">50 €</td>
          </tr>
          <tr>
            <th></th>
            <td className=" text-center">90 min</td>
            <td className=" text-center">70 €</td>
          </tr>
        </tbody>
      </table>
    </div>
  </Layout>
)

export default Cenik
