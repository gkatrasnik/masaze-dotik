import React from "react"
import { Link } from "gatsby"
import { FaFacebook, FaInstagram } from "react-icons/fa"

function Footer() {
  return (
    <footer>
      <div className="flex justify-evenly flex-wrap px-4 bg-gray-200 p-4 mt-4 content-center">
        <div className="flex">
          <Link to={`https://www.facebook.com/dotikmasaze`} className="px-2">
            <FaFacebook size={"2em"} />
          </Link>
          <Link to={`https://www.instagram.com/masaze.dotik/`} className="px-2">
            <FaInstagram size={"2em"} />
          </Link>
        </div>
        <Link to={`/kontakt`}>
          <div className="leading-loose">
            <a href="tel:040996397"> Tel: 040 996 397</a>
          </div>
        </Link>
        <div className="leading-loose">
          © {new Date().getFullYear()}, Masaže Dotik
        </div>
      </div>
    </footer>
  )
}

export default Footer
