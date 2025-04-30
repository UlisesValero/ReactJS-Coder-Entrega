import React from "react";
import NavBar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CartProvider } from "./components/context/CartContext";
import Checkout from "./components/Checkout";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <div className="relative bg-[#121413] z-0">
        <div className="absolute w-full h-[1200px] bg-[url(/assets/welcomeSectionBg.jpg)] -z-10 bg-cover bg-no-repeat"></div>
        <NavBar text={"Ordena aqui"}/>
        <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:categoriaParam" element={<ItemListContainer/>} />
        <Route path="/product/:productId" element={<ItemDetailContainer/>} />
        <Route path="/checkout" element= {<Checkout/>} />
        <Route path="/aboutus" element={<AboutUs/>}/>
        </Routes>
      </div>
      </BrowserRouter>
      </CartProvider>
  )
}

export default App
