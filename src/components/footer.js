import React from "react"
import { Link } from "gatsby"

function Footer() {
  return (
    <footer>
      <div className="flex justify-evenly flex-wrap px-4 bg-gray-200 p-4">
        <div>Social Icons</div>
        <Link to={`/kontakt`}>
          <div> Kontakt</div>
        </Link>
        <div>© {new Date().getFullYear()}, Masaže Dotik</div>
      </div>
    </footer>
  )
}

export default Footer
