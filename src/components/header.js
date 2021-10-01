import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <nav className="flex flex-wrap items-center justify-between p-6 mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="flex items-center flex-shrink-0 mr-6 text-white">
        <span className="text-xl font-semibold tracking-tight">
          {siteTitle}
        </span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          className="flex items-center px-3 py-2 text-white border border-white rounded hover:text-white hover:border-white"
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow  ">
          <div className="lg:float-right">
            <Link
              to={`/`}
              href="#responsive-header"
              className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
            >
              Domov
            </Link>
            <Link
              to={`/storitve`}
              className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
            >
              Storitve
            </Link>
            <Link
              to={`/reference`}
              className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
            >
              Reference
            </Link>
            <Link
              to={`/cenik`}
              className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
            >
              Cenik
            </Link>
            <Link
              to={`/kontakt`}
              className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
