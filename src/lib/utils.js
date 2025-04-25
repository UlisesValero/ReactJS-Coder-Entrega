
import { getProducts } from "../firebase/db.js";

export const getAvailableCategories = async () => {
    const products = await getProducts();
    let categories = []
    products.map(product => {
        if (!categories.find(i => i == product.category)) categories.push(product.category)
    })
    return categories
}

//separador por regExp: separa un string en varias palabras según letra mayúscula
export const separateByCaps = str => {
    return str.replace(/([a-z])([A-Z])|([A-Z])([A-Z][a-z])/g, '$1$3 $2$4')
}