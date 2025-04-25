import "../App.css"
import { UseCart } from "./context/CartContext"
import {TrashIcon} from '@heroicons/react/24/solid'

const CartCard = () => {
    const { cartItems, removeItem } = UseCart()

return (
    <div className="flex-1 overflow-y-auto space-y-4">
    {cartItems.map((item) => (
        <div key={item.id} className="flex items-center h-[fit] gap-4 border-b pb-2">
            <div className="w-1/3 h-full object-cover rounded">
            <img
                src={item.img}
                alt={item.title}
            />
            </div>
            <div className="w-1/3">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-600">
                    Cantidad: {item.quantity}
                </p>
                <p className="text-sm font-bold text-cyan">
                    Total: ${item.price * item.quantity}
                </p>
                </div>
                <div onClick={()=> removeItem(item.id)} className="w-1/3 flex justify-end">
                <TrashIcon className="w-10 cursor-pointer text-cyan hover:text-orange hover:w-11" />
            </div>
        </div>
    ))}
</div>
)}

export default CartCard