import { serverTimestamp } from "firebase/firestore";
import "../App.css"
import { UseCart } from '../components/context/CartContext'
import { createOrder } from "../firebase/db";
import Toastify from 'toastify-js'
import { useNavigate } from "react-router";



const Checkout = () => {
  const navigate = useNavigate()
    const { cartItems, clearCart } = UseCart()
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form[0].value;
        const phone = form[1].value;
        const email = form[2].value;

        const order = {
            items: cartItems,
            user: {name, phone, email},
            date: serverTimestamp()
        };
        createOrder(order)
        form.reset()

        Toastify({
            text: "🍔 Orden cargada con éxito",
            duration: 4000,
            className:'toast'
          }).showToast();
          clearCart();
      };
    
      return (
        <section className="flex justify-center items-center">
          <div className="bg-[url(/assets/favicon.png)] bg-gray-300 bg-cover h-[70vh] w-[85%] lg:w-[60vw] lg:rounded-xl lg:shadow-lg flex flex-col justify-center items-center gap-6">
            <div className="font-h1 font-bold text-xl underline md:text-3xl lg:text-3xl bg-gray-300">
            Complete para finalizar la compra
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-60 md:w-80 lg:w-100">
              <div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  minLength={2}
                  className="w-full border-3 border-cyan focus:outline-none bg-gray-300 font-p md:text-lg rounded px-3 py-2"
                  placeholder="Nombre y apellido"
                  defaultValue="Ulises Valero"
                />
              </div>
              <div>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  pattern="\d{8,}"
                  className="w-full border-3 border-cyan focus:outline-none bg-gray-300 font-p md:text-lg rounded px-3 py-2"
                  placeholder="Teléfono"
                  defaultValue="1158556488"
                />
              </div>
              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full border-3 border-cyan focus:outline-none bg-gray-300 font-p md:text-lg rounded px-3 py-2"
                  placeholder="Correo electrónico"
                  defaultValue="u.ivalero@hotmail.com"
                />
              </div>
        
              <button
              onClick={() => {
                navigate(-2);
              }}
                type="submit"
                className="bg-cyan hover:bg-yellow hover:text-black hover:border-1 hover:transition text-white font-semibold py-2 rounded cursor-pointer"
              >
                Enviar orden
              </button>
            </form>
          </div>
        </section>
      );
    }

export default Checkout