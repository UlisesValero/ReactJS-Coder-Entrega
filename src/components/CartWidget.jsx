import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import { useState, useEffect } from "react"
import "../App.css"
// import CartPopUp from "./CartPopUp"


function CartWidget() {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(!open)
    }

    const EscKeyListener = ({ onEsc }) => {
        useEffect(() => {
            const handleKeyDown = (event) => {
                if (event.key === "Escape") {
                    onEsc();
                }
            };
            document.addEventListener("keydown", handleKeyDown);

            return () => {
                document.removeEventListener("keydown", handleKeyDown);
            };
        }, [onEsc]);
        return null;
    }

    return (
        <div className="flex flex-row-reverse absolute h-[2.3rem]">
            <span className="absolute font-bold bg-yellow pl-[0.3rem] pr-[0.2rem] text-sm rounded-2xl">0</span>
            <ShoppingCartIcon onClick={handleClick} className="cursor-pointer text-white" />
            {/* <CartPopUp isOpened={open} onClose={handleClick} /> */}
            <EscKeyListener onEsc={() => setOpen(false)} />
        </div>
    )
}
export default CartWidget
