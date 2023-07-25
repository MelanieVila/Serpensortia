import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ product, quantity, nombre, precio, img }) => {
    const { removeProduct } = useContext(CartContext)

    return (
        <div>
            <h4>{nombre}</h4>
            <p>Cantidad: {quantity}</p>
            <p>Precio: ${precio}</p>
            <img src={img} alt={nombre}/>
            <button onClick={() => removeProduct(product.id)}>Eliminar</button>
        </div>
    )
}

export default CartItem;