import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { getProducts } from "../../asyncMock";
import "./ItemListContainer.css";

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
        .then(response => {
            setProducts(response)
        })
        .catch(error => {
            console.error(error)
        })
    })

    return (
        <div>
            <h1>{greeting}</h1>
            <h4>El hechizo invocador de serpientes, <span>Serpensortia</span>, es un hechizo de transformación que conjura una serpiente del extremo de la varita.</h4>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;