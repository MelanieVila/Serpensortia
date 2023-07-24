import { useState } from "react";
import { Button } from 'react-bootstrap';
import "./ItemCount.css"

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div>
            <div className="carrito__cantidad">
                <Button onClick={decrement} size="lg" className="carrito__boton">-</Button>
                <h4 className="p-3">{quantity}</h4>
                <Button onClick={increment} size="lg" className="carrito__boton">+</Button>
            </div>
            <Button onClick={() => onAdd(quantity)} size="lg" className="carrito__boton text-uppercase">Agregar al carrito</Button>
        </div>
    )
}

export default ItemCount;