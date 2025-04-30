import { useEffect, useState } from "react"
import { useParams } from "react-router"
import withLoading from "./hoc/withLoading"
import ItemDetail from "./ItemDetail"
import { getProduct } from "../firebase/db"

const ItemDetailwithLoading = withLoading(ItemDetail)

const ItemDetailContainer = () => {
    const { productId } = useParams()
    const [itemData, setItemData] = useState([])

    useEffect(() => {
      getProduct(productId)
      .then(product => setItemData(product))
    })

    return (
        <ItemDetailwithLoading data={itemData}/>
    )
}

export default ItemDetailContainer
