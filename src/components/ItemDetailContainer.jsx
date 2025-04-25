import { useEffect, useState } from "react"
import { useParams } from "react-router"
import withLoading from "./hoc/WithLoading"
import ItemDetail from "./ItemDetail"
import { getProduct } from "../firebase/db"

const ItemDetailWithLoading = withLoading(ItemDetail)

const ItemDetailContainer = () => {
    const { productId } = useParams()
    const [itemData, setItemData] = useState([])

    useEffect(() => {
      getProduct(productId)
      .then(product => setItemData(product))
    })

    return (
        <ItemDetailWithLoading data={itemData}/>
    )
}

export default ItemDetailContainer
