import { useEffect, useState } from "react";
import "../App.css"
import ItemList from "./ItemList";
import withLoading from "./hoc/WithLoading";
import ProductsList from "../lib/ProductsList";

const ItemListWithLoading = withLoading(ItemList)

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    setTimeout(() => {
      setProducts(ProductsList)
    }, 3000)
  }, [products])

  return (
    <ItemListWithLoading data={products}/>
  );
};

export default ItemListContainer