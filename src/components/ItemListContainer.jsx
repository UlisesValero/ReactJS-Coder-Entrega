import "../App.css"
import CartWidget from "./CartWidget"

function ItemListContainer({text}){
  return(
    <section className="buttonContainer">
    <button>Smash burgers</button>
    <button>Vegan option</button>
    <button>Fries</button>
    <button>Contact us</button>
    <button>{text}</button>
    <CartWidget/>    
    </section>
  )
}

export default ItemListContainer