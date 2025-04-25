import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import "../App.css"
import CartPopUp from "./CartPopUp"
import { UseCart } from "./context/CartContext"


function CartWidget() {
    const { toggleCart, isOpened, cartCount } = UseCart()
    

    return (
        <div className="flex flex-row-reverse absolute h-[2.3rem]">
            <span className="absolute font-bold bg-yellow pl-[0.3rem] pr-[0.2rem] text-sm rounded-2xl">{cartCount}</span>
            <ShoppingCartIcon onClick={toggleCart} className="cursor-pointer text-white" />
            {isOpened && <CartPopUp />}
        </div>
    )
}
export default CartWidget
