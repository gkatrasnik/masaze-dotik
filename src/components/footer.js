import React from "react"
import { FaFacebook, FaInstagram } from "react-icons/fa"

function Footer() {
  return (
    <footer>
      <div className="flex justify-evenly flex-wrap px-4 bg-gray-200 p-4 mt-4 content-center">
        <div className="flex">
          <a href="https://www.facebook.com/dotikmasaze" className="px-2">
            <FaFacebook size={"2em"} />
          </a>
          <a href="https://www.instagram.com/masaze.dotik" className="px-2">
            <FaInstagram size={"2em"} />
          </a>
        </div>

        <div className="leading-loose font-bold ">
          <a href="tel:+386 40 996 397">Tel: +386 40 996 397</a>
        </div>

        <div className="leading-loose">
          © {new Date().getFullYear()}, Masaže Dotik
        </div>
      </div>
    </footer>
  )
}

export default Footer
