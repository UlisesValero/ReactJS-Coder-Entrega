import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import "../src/App.css"

function CartWidget(){
    return(
<div className="cartContainer">
<span className="redCircle">0</span>
    <ShoppingCartIcon className="cartWidget"/>
</div>
    )
}
export default CartWidget



