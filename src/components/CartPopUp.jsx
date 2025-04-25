import { useEffect, useRef } from "react";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { UseCart } from "./context/CartContext";
import CartCard from "./CartCard";
import { Link, useNavigate } from "react-router-dom";
import Toastify from 'toastify-js'

const CartPopUp = () => {
    const { cartItems, toggleCart, isOpened, closeCart } = UseCart();
    const cartRef = useRef(null);
    const navigate = useNavigate();


    const handleCheckout = () => {
        toggleCart();
        navigate("/checkout");
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (cartRef.current && !cartRef.current.contains(e.target)) {
                closeCart();
            }
        };

        if (isOpened) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpened, closeCart]);

    const totalPrice = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    if (!isOpened) return null;

    return (
        <section
            ref={cartRef}
            className="fixed right-0 top-0 h-full w-[25rem] bg-gray-300 shadow-lg z-50 p-4 flex flex-col"
        >
            <h2 className="text-2xl font-bold text-cyan mb-4 border-b pb-2">
                Tu carrito
            </h2>

            {cartItems.length === 0 ? (
                <p className="text-gray-500">El carrito está vacío.</p>
            ) : (
                <CartCard />
            )}

            <div className="mt-4 border-t pt-4">
                <p className="text-lg font-bold">Total: ${totalPrice}</p>
                <button
                    onClick={handleCheckout}
                    disabled={cartItems.length === 0}
                    className="bg-cyan hover:bg-yellow hover:text-black hover:border-2 hover:transition text-white font-semibold px-4 py-2 rounded mt-2 w-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Continuar
                </button>
            </div>

            <XMarkIcon
                onClick={toggleCart}
                className="absolute w-10 top-4 right-4 text-cyan text-xl font-bold hover:text-orange cursor-pointer"
            />
        </section>
    );
};

export default CartPopUp;
