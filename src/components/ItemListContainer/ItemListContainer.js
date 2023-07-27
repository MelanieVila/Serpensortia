import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/config";

const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const collectionRef = categoryId
            ? query(collection(db, "productos"), where("categoria", "==", categoryId))
            : collection(db, "productos")

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(productsAdapted)
            })
            .catch(error => console.log(error))
    }, [categoryId])

    return (
        <div>
            <h1>Harry Potter Shop</h1>
            <h4>El hechizo invocador de serpientes, <span className="fst-italic">Serpensortia</span>, es un hechizo de transformación que conjura una serpiente del extremo de la varita.</h4>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer;