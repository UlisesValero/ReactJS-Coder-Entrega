import { XMarkIcon } from "@heroicons/react/16/solid";
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { useEffect, useState } from "react";
import { getAvailableCategories, separateByCaps } from "../../lib/utils"
import { Link } from "react-router"

const Menu = ({ open, setOpen }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      const fetchCategories = async () => {
        const result = await getAvailableCategories();
        setCategories(result);
      };
  
      fetchCategories();
    }, []);
  return (
    <div className={`styledMenu ${open ? "flex" : "hidden"} 
    flex-col justify-center bg-white bg-[url(../../src/assets/favicon.png)] bg-cover h-[100vh] text-left p-[2rem] fixed top-0 left-0 w-[60vw] md:w-[50vw] lg:hidden`}>
      <XMarkIcon onClick={() => setOpen(!open)} className="w-15 text-cyan absolute top-8 left-6"></XMarkIcon>
          <Popover className="relative cursor-pointer">
            <PopoverButton className="cursor-pointer font-h1 text-3xl font-bold text-orange ">Menu</PopoverButton>
            <PopoverPanel anchor="right end" className="bg-cyan text-white font-p text-2xl flex flex-col cursor-pointer ml-3 rounded-3xl p-8 gap-2">
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
          <Link to={"/"} className="titulo font-h1 text-3xl font-bold text-cyan brightness-80 hover:text-yellow hover:brightness-100">Ordena aquí</Link>
        <div className="flex flex-col">
          <Link to={"/category/Beverages"} className="titulo font-h1 text-3xl font-bold text-cyan brightness-80 hover:text-yellow hover:brightness-100" href="">Bebidas</Link>
          <Link to={"./AboutUs"} className="titulo font-h1 text-3xl font-bold text-cyan brightness-80 hover:text-yellow hover:brightness-100" >Nosotros</Link>
        </div>
    </div>
  );
};

export default Menu;