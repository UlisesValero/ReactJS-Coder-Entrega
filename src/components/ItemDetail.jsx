import { separateByCaps } from "../lib/utils"
import ItemCount from "./ItemCount"

const ItemDetail = ({data: product}) => {
    return (
        <div className="flex flex-col mt-15 md:flex-row bg-black text-white p-6 md:p-12">
            <div className="w-full md:w-1/2 flex justify-center items-center">
                <img
                    src={product.img}
                    alt={product.title}
                    className="max-w-full rounded-lg shadow-lg"
                />
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-center mt-6 md:mt-0 md:pl-12">
                <h2 className="text-orange text-4xl font-bold">{product.title}</h2>
                <p className="text-cyan text-lg mt-2">{separateByCaps(product.category)}</p>
                <p className="text-white mt-4">{product.description}</p>
                <p className="text-yellow text-2xl font-semibold mt-4">{product.price}</p>
                <ItemCount/>
            </div>
        </div>
    )
}

export default ItemDetail