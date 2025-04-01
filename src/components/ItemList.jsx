import { useParams } from "react-router";
import "../App.css"
import Item from "./Item";
import { getAvailableCategories, separateByCaps } from "../lib/utils";

const ItemList = ({ data: items }) => {
    const { categoriaParam } = useParams()

    const categories = categoriaParam ? [categoriaParam] : getAvailableCategories()

    return (
        <section className="h-auto">
            {categories.map(category => {
                let filteredProducts = items.filter(i => i.category == category)
                let categoryName = separateByCaps(category)
                return (
                    <div className="mt-10" key={category}>
                        <h1 className="font-h1 text-yellow text-7xl font-semibold text-center">{categoryName}</h1>
                        <div className="my-12 flex flex-wrap justify-center gap-10 md:gap-14 xlg:justify-between xlg:px-20">
                            {filteredProducts.map(product => (
                                <Item product={product} key={product.id} />
                            ))}
                        </div>
                    </div>
                )
            })}
        </section>
    );
};

export default ItemList
