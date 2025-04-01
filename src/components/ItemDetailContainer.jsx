import { useEffect, useState } from "react"
import { useParams } from "react-router"
import ProductsList from "../lib/ProductsList"
import withLoading from "./hoc/WithLoading"
import ItemDetail from "./ItemDetail"

const ItemDetailWithLoading = withLoading(ItemDetail)

const ItemDetailContainer = () => {
    const { productId } = useParams()
    const [itemData, setItemData] = useState([])

    useEffect(() => {
        setTimeout(() => {
          setItemData({...ProductsList.find(i => i.id == productId)})
        }, 3000)
        console.log(itemData)
      })

    return (
        <ItemDetailWithLoading data={itemData}/>
    )
}

export default ItemDetailContainer