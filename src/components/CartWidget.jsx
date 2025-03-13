import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import "../App.css"
import CartPopUp from "./CartPopUp"
import EscKeyListener from "./EscKeyListener"


function CartWidget(){
    const [open, setOpen] = useState(false)

const handleClick = ()=> {
    setOpen(!open)
}


    return(
<div className="cartContainer">
<span className="redCircle">0</span>
    <ShoppingCartIcon onClick={handleClick} className="cartWidget"/>
    <CartPopUp isOpened={open}/>
    <EscKeyListener onEsc={() => setOpen(false)} />
</div>
    )
}
export default CartWidget



// Al clickear el carrito que se desplegue el menú carrito 
// y al clickearlo nuevamente que se cierre
// Hacer las cards de los productos seleccionados