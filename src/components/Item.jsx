import { Link } from "react-router"

const Item = ({ product }) => {
    return (
        <div
            key={product.id}
            className="w-[90%] md:w-[45%] xlg:w-[30%] bg-gradient-to-r from-white to-cyan rounded-3xl p-4 flex flex-col"
        >
            <div className="w-full h-48 md:h-56">
                <img
                    src={product.img}
                    className="h-full w-full object-cover rounded-2xl"
                    alt="Promo"
                />
            </div>
            <div className="mt-4">
                <h1 className="font-h1 text-orange font-bold text-2xl">{product.title}</h1>
                <p className="font-p text-sm">{product.description}</p>
            </div>
            <div className="font-h1 font-bold text-xl my-2">${product.price}</div>
            <Link
                to={`/product/${product.id}`}
                className="cursor-pointer mt-2 text-center font-h1 font-bold text-xl bg-cyan text-white py-2 px-4 rounded-lg hover:text-black hover:bg-yellow">
                Ver detalle
            </Link>
        </div>)
}

export default Item