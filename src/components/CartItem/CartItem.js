import { useContext } from "react";
import { Button } from 'react-bootstrap';
import { CartContext } from "../../context/CartContext";
import './CartItem.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const CartItem = ({ id, quantity, nombre, precio, img }) => {
    const { removeProduct } = useContext(CartContext)

    return (
        <div className="carrito__productos my-5">
            <img src={img} alt={nombre} className="my-0 mx-auto w-50"/>
            <h4>{nombre}</h4>
            <p>${precio}</p>
            <p>Cantidad: {quantity}</p>
            <Button onClick={() => removeProduct(id)} className="btn btn-light btn-outline-dark btn-lg py-3 px-4"><FontAwesomeIcon icon={faTrashCan} /></Button>
        </div>
    )
}

export default CartItem;