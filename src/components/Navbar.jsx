import "../App.css"
import { getAvailableCategories, separateByCaps } from "../lib/utils"
import CartWidget from "./CartWidget"
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { Link } from "react-router"
import { useState, useEffect, useRef } from "react"
import Burger from "./ui/burger";
import Menu from "./ui/Menu"


const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler(event);
    };
    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};

function Navbar({ text }) {
  const [open, setOpen] = useState(false);
  const node = useRef();

  useOnClickOutside(node, () => setOpen(false));
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const result = await getAvailableCategories();
      setCategories(result);
    };

    fetchCategories();
  }, []);

  return (
    <header className="flex justify-between px-2 lg:flex lg:items-center lg:pt-5 lg:pl-10 lg:columns-3 z-20">
            <div ref={node} className="lg:hidden flex justify-center items-center">
        <Burger open={open} setOpen={setOpen}/>
        <Menu open={open} setOpen={setOpen} />
      </div>
      <div className="lg:flex lg:items-center lg:justify-center lg:flex-grow lg:gap-15">
        <div className="hidden lg:flex lg:flex-1/4 lg:justify-end lg:gap-10">
          <Popover className="relative cursor-pointer">
            <PopoverButton className="titulo z-auto cursor-pointer font-h1 text-3xl font-semibold text-white brightness-80 hover:text-yellow hover:brightness-100">Menu</PopoverButton>
            <PopoverPanel anchor="bottom" className="bg-cyan text-white font-p flex flex-col cursor-pointer mt-2 rounded-b-3xl p-4 gap-2">
              {
                categories.map(category => (
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
          <Link to={"/"}
          className="titulo font-h1 text-3xl font-semibold text-white brightness-80 hover:text-yellow hover:brightness-100">
          {text}
          </Link>
        </div>
        <div className="lg:flex lg:flex-1/15 lg:justify-center  rounded-4xl">
          <Link to={"/"}>
            <img className="w-[13rem]" src="../src/assets/kiddu-logo.png" alt="Imagen del logotipo" />
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1/4 lg:justify-start lg:gap-10">
          <Link to={"/category/Beverages"}
          className="titulo font-h1 text-3xl font-semibold text-white brightness-80 hover:text-yellow hover:brightness-100">
          Bebidas
          </Link>
          <Link to={"./AboutUs"}
          className="titulo font-h1 text-3xl font-semibold text-white brightness-80 hover:text-yellow hover:brightness-100">
            Nosotros
            </Link>
        </div>
      </div >
      <div className="w-10 flex items-center lg:flex lg:justify-end lg:items-center">
          <CartWidget/>
        </div>
    </header>
  );
}

export default Navbar