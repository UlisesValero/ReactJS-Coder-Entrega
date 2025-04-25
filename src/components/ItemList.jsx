import { useParams } from "react-router-dom";
import "../App.css"
import Item from "./Item";
import { getAvailableCategories, separateByCaps } from "../lib/utils";
import { useState, useEffect } from "react";

const ItemList = ({ data: items }) => {
  const { categoriaParam } = useParams();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (categoriaParam) {
      setCategories([categoriaParam]);
    } else {
      const fetchCategories = async () => {
        const result = await getAvailableCategories();
        setCategories(result);
      };
      fetchCategories();
    }
  }, [categoriaParam]);

  return (
    <section className="h-auto">
      {categories.map(category => {
        let filteredProducts = items.filter(i => i.category === category);
        let categoryName = separateByCaps(category);
        return (
          <div className="mt-10" key={category}>
            <h1 className="font-h1 text-yellow text-4xl md:text-5xl lg:text-7xl font-semibold text-center">{categoryName}</h1>
            <div className="mt-12 pb-12 flex flex-wrap justify-center gap-10 md:gap-14 xlg:justify-between xlg:px-20 ">
              {filteredProducts.map(product => (
                <Item product={product} key={product.id} />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ItemList;
