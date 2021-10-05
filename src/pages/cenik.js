import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Cenik = props => (
  <Layout>
    <SEO title="Cenik" />
    <h1 className="text-center text-3xl my-8">CENIK</h1>
    <div className="py-4 md:py-8 px-4 my-2 w-screen sm:w-full ">
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
            <td className=" text-center">30min</td>
            <td className=" text-center">30€</td>
          </tr>
          <tr>
            <th></th>
            <td className=" text-center">60min</td>
            <td className=" text-center">40€</td>
          </tr>
          <tr>
            <th></th>
            <td className=" text-center">90min</td>
            <td className=" text-center">50€</td>
          </tr>
          <br />
          <tr className="border-t-2 border-gray-400 ">
            <th>Športna masaža</th>
            <td className=" text-center">30min</td>
            <td className=" text-center">30€</td>
          </tr>
          <tr>
            <th></th>
            <td className=" text-center">60min</td>
            <td className=" text-center">40€</td>
          </tr>
          <tr>
            <th></th>
            <td className=" text-center">90min</td>
            <td className="text-center">50€</td>
          </tr>
          <br />
          <tr className="border-t-2 border-gray-400 ">
            <th>Klasična masaža</th>
            <td className=" text-center">60min</td>
            <td className=" text-center">40€</td>
          </tr>
          <tr>
            <th></th>
            <td className=" text-center">90min</td>
            <td className=" text-center">50€</td>
          </tr>
        </tbody>
      </table>
    </div>
  </Layout>
)

export default Cenik
