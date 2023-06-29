import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../catalogo";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
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