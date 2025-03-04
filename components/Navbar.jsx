import "../src/App.css"
import CartWidget from "./CartWidget"
import ItemListContainer from "./ItemListContainer"

function Navbar(){
    return(
        <header className="header">
        <img className="logo" src="../src/assets/kiddu-logo.png" alt="Imagen del logotipo" />        
        <ItemListContainer text="Próximamente.."/>
        <CartWidget/>
        </header>
     
    )
}

export default Navbar