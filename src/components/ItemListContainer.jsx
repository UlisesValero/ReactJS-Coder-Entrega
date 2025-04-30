import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProducts, filterByCategory } from "../firebase/db";
import ItemList from "./ItemList";
import withLoading from "./hoc/withLoading";

const ItemListWithLoading = withLoading(ItemList)

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      if (categoryId) {
        const filtered = await filterByCategory(categoryId);
        setProducts(filtered);
      } else {
        const allProducts = await getProducts();
        setProducts(allProducts);
      }
    }
    fetchData();
  }, [categoryId])

  return <ItemListWithLoading data={products} key={products.id} />
};

export default ItemListContainer;