import React from "react";
import NavBar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer";

function App(){
  return(
    <header className="header">
      <NavBar />
      <ItemListContainer text="Próximamente.."/>

    </header>
  )
}

export default App
