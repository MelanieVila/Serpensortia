import { useContext } from "react"
import { CartContext } from "../../context/CartContext";

const CartItem = ({ product, cantidad }) => {
    const { eliminarProduct } = useContext(CartContext);

    return (
        <div>
            <h4>{product.nombre}</h4>
            <p>Cantidad: {cantidad}</p>
            <p>Precio: ${product.precio}</p>
            <img src={product.img} alt=""/>
            <button onClick={() => eliminarProduct(product.id)}>Eliminar</button>
        </div>
    )
}

export default CartItem;