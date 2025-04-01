import React from "react";
import NavBar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="relative bg-[#121413] z-0">
        <div className="absolute w-full h-[1200px] bg-[url(../src/assets/welcomeSectionBg.jpg)] -z-10 bg-cover bg-no-repeat"></div>
        <NavBar text={"Ordena aqui"}/>
        <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:categoriaParam" element={<ItemListContainer/>} />
        <Route path="/product/:productId" element={<ItemDetailContainer/>} />
        </Routes>
      </div>

      </BrowserRouter>
  )
}

export default App
