import * as React from "react"
import { Link } from "gatsby"

type HeaderProps = {}

const Layout: React.FC<HeaderProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const handleButtonClick = () => {
    console.log("click")
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header>
      <nav
        className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-white
        "
      >
        <div className="p-4 py-2">
          <a href="#" className="font-lora font-extrabold text-black text-3xl">
            WT Shek
          </a>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          className="h-6 w-6 cursor-pointer md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={handleButtonClick}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <div
          className={`w-full md:flex md:items-center md:w-auto ${
            isMenuOpen ? "" : "hidden"
          }`}
          id="menu"
        >
          <ul
            className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
          >
            {/* <li>
              <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
                Features
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Layout
