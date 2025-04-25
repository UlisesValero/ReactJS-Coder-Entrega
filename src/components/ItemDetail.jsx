import { useState } from "react";
import { UseCart } from "./context/CartContext";
import ItemCount from "./ItemCount";
import Toastify from 'toastify-js'

const ItemDetail = ({ data: product }) => {
    const [count, setCount] = useState(0);
    const { addToCart } = UseCart();


    const handleAdd = () => {
        Toastify({
            text: "Agregado al carrito 🧾",
            duration: 2000,
            className: 'toast'
        }).showToast();
        addToCart(product, count);
        setCount(0);

    };

    return (
        <section className="flex justify-center items-center ">
        <div className="md:h-[75vh] lg:w-[80vw] flex flex-col mt-15 md:flex-row bg-[url(../../src/assets/favicon.png)]  bg-gray-300 bg-no-repeat bg-right text-black rounded-3xl p-6 ">
            <div className="w-full md:w-1/2 flex justify-center items-center">
                <img
                    src={product.img}
                    alt={product.title}
                    className="max-h-100 rounded-lg shadow-lg"
                />
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-center mt-6 md:mt-0 md:pl-12">
                <h2 className="text-cyan underline text-4xl font-bold">{product.title}</h2>
                <p className="text-black font-bold mt-4 lg:max-w-[50%]">{product.description}</p>
                <p className="text-black text-2xl font-semibold mt-4">${product.price}</p>
                
                <ItemCount count={count} setCount={setCount} />

                <button
                    className="bg-cyan hover:bg-yellow hover:text-black hover:border-1 hover:transition text-white font-semibold px-4 py-2 rounded mt-2 w-fit cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={handleAdd}
                    disabled={count == 0}
                >
                    Agregar al carrito
                </button>
            </div>
        </div>
        </section>
    );
};

export default ItemDetail;
