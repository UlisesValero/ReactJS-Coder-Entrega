// import { useState } from 'react'
import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "../components/Navbar"

function App(){
  return(
    <>
    <NavBar/>
    </>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
export default App
