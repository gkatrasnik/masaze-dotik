import React from "react"

function Cookies(props) {
  return (
    <div className="absolute w-full  z-50 top-1/3">
      <div className="flex flex-col justify-center px-4 bg-gray-200 p-4 w-full content-center">
        <p className="w-4/5 mx-auto">
          Spletno mesto uporablja nujne piškotke, potrebne za delovanje spletne
          strani, poleg tega uporablja tudi piškotke potrebne za delovanje
          vtičnika za dostopnost, ter vtičnika za prikazovanje video posnetkov.
          Z uporabo strani soglašate z uporabo piškotkov.
        </p>
        <button
          className="mt-4 w-20 mx-auto border-2 border-dotikExtraDarkBrown text-dotikExtraDarkBrown"
          onClick={props.closeCookies}
        >
          Soglašam
        </button>
      </div>
    </div>
  )
}

export default Cookies
