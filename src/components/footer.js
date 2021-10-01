import React from "react"
import { Link } from "gatsby"

function Footer() {
  return (
    <footer className="flex justify-evenly flex-wrap px-4">
      <div>Social Icons</div>
      <div> Kontakt</div>
      <div>© {new Date().getFullYear()}, Masaže Dotik</div>
    </footer>
  )
}

export default Footer
