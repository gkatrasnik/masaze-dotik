import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <nav className=" sticky   w-full z-10 flex flex-wrap items-center justify-between p-6 mb-0 bg-black ">
      <div className="flex items-center flex-shrink-0 mr-6 text-white">
        {/* <StaticImage
          src="../images/logo-horizontal.png"
          alt="masaže dotik logo"
          width={117}
          height={40}
        />
        */}
        <span className="text-xl font-light  tracking-tight text-white">
          {siteTitle}
        </span>
      </div>
      <div className="block md:hidden">
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          className="flex items-center px-3 py-2 text-dotikDarkBrown border border-dotikDarkBrown rounded hover:text-white hover:border-white"
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
        } w-full block flex-grow md:flex md:items-center md:w-auto`}
      >
        <div className="text-sm md:flex-grow  ">
          <div className="md:float-right">
            <Link
              to={`/`}
              href="#responsive-header"
              className="block mt-4 mr-4 text-white md:text-lg md:inline-block md:mt-0 hover:text-dotikDarkBrown"
            >
              Domov
            </Link>

            <Link
              to={`/reference`}
              className="block mt-4 mr-4 text-white md:text-lg md:inline-block md:mt-0 hover:text-dotikDarkBrown"
            >
              Reference
            </Link>
            <Link
              to={`/cenik`}
              className="block mt-4 mr-4 text-white md:text-lg md:inline-block md:mt-0 hover:text-dotikDarkBrown"
            >
              Cenik
            </Link>
            <Link
              to={`/omeni`}
              className="block mt-4 mr-4 text-white md:text-lg md:inline-block md:mt-0 hover:text-dotikDarkBrown"
            >
              O meni
            </Link>
            <Link
              to={`/kontakt`}
              className="block mt-4 mr-4 text-white md:text-lg md:inline-block md:mt-0 hover:text-dotikDarkBrown"
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
