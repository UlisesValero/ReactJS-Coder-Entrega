import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { readFileSync } from "fs";

const products = JSON.parse(readFileSync("./products.json", "utf8"));

const firebaseConfig = {
    apiKey: "AIzaSyBzCVQ1sm8KRs-203o4kc8GWAiIalYOnp4",
    authDomain: "thekidd-u.firebaseapp.com",
    projectId: "thekidd-u",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const uploadProducts = async () => {
  for (const id in products) {
    const product = products[id];
    try {
      await setDoc(doc(db, "products", id), product);
    } catch (error) {
      console.error(`Error al subir el producto ${id}:`, error);
    }
  }
};

uploadProducts();
