import { getFirestore, 
    collection, 
    getDocs,
    query,
    where,
    doc,
    getDoc,
    addDoc
 } from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app)

export const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products = []

    querySnapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() });
      });      
      return products
}

export const filterByCategory = async (category) => {
    const q = query(collection(db, "products"), where("category", "=", category))

const querySnapshot = await getDocs(q)
const filteredItems = []


querySnapshot.forEach((doc) => {
    filteredItems.push(doc.data())
})
return filteredItems
}

export const getProduct = async (id) => {
    const docRef = doc(db, "products", id);
    const productExists = await getDoc(docRef);
    
    if (productExists.exists()) {
        return productExists.data()
    } else {
      console.log("No such document!");
    }

}

export const createOrder = async (order) => {
    try {
        const docRef = await addDoc(collection(db, "orders"), order)
        console.log("Documento agregado con el ID: ", docRef.id)
    } catch (e) {
        console.log("Error cargando el documento", e)
    }
}