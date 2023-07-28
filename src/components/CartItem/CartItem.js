import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import './CartItem.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const CartItem = ({ id, quantity, nombre, precio, img }) => {
    const { removeProduct } = useContext(CartContext)

    return (
        <div className="carrito__productos">
            <img src={img} alt={nombre} className="my-0 mx-auto w-50 rounded-5"/>
            <h4>{nombre}</h4>
            <p>${precio}</p>
            <p>Cantidad: {quantity}</p>
            <button onClick={() => removeProduct(id)}><FontAwesomeIcon icon={faTrashCan} /></button>
        </div>
    )
}

export default CartItem;