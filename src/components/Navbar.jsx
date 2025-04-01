import "../App.css"
import { getAvailableCategories, separateByCaps } from "../lib/utils"
import CartWidget from "./CartWidget"
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { Link } from "react-router"




function Navbar({ text }) {
  return (
    <header className="lg:flex lg:items-center lg:pt-5 lg:pl-10 columns-3 z-20">
      <div className="lg:flex lg:items-center lg:justify-center lg:flex-grow lg:gap-15">
        <div className="lg:flex lg:flex-1/4 lg:justify-end lg:gap-10">
          <Popover className="relative cursor-pointer">
            <PopoverButton className="titulo cursor-pointer font-h1 text-3xl font-semibold text-white brightness-80 hover:text-yellow hover:brightness-100">Menu</PopoverButton>
            <PopoverPanel anchor="bottom" className="bg-cyan text-white font-p flex flex-col cursor-pointer mt-2 rounded-3xl p-4 gap-2">
              {
                getAvailableCategories().map(category => (
                  <Link className="hover:text-yellow"
                  key={category}
                to={`/category/${category}`}
              >
                
                {separateByCaps(category)}
              </Link>
                ))
              }
            </PopoverPanel>
          </Popover>
          <a className="titulo font-h1 text-3xl font-semibold text-white brightness-80 hover:text-yellow hover:brightness-100" href="null">{text}</a>
        </div>
        <div className="flex flex-1/15 justify-center">
        <a href="/">
        
          <img className="w-[13rem]" src="../src/assets/kiddu-logo.png" alt="Imagen del logotipo" />
        </a>
        </div>
        <div className="lg:flex lg:flex-1/4 lg:justify-start lg:gap-10">
          <a className="titulo font-h1 text-3xl font-semibold text-white brightness-80 hover:text-yellow hover:brightness-100" href="">Bebidas</a>
          <a className="titulo font-h1 text-3xl font-semibold text-white brightness-80 hover:text-yellow hover:brightness-100" href="">Nosotros</a>
        </div>
        <div className="lg:flex lg:justify-end lg:items-center pr-1">
          <CartWidget />
        </div>
      </div >
    </header>
  )
}

export default Navbar