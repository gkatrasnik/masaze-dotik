import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Cenik = props => (
  <Layout>
    <SEO title="Cenik" />
    <h1 className="text-center mb-8">Cenik</h1>
    <div className=" bg-gray-100 border-4 py-4 px-4 w-max mx-auto rounded-lg">
      <table className="table-auto">
        <thead>
          <tr>
            <th className=" md:w-40"></th>
            <th className=" md:w-40 ">Čas</th>
            <th className=" md:w-40 ">Cena</th>
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
          <tr>
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
          <tr>
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
