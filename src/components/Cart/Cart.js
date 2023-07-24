import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>El carrito está vacío.</h1>
                <Link to="/">Volver a la tienda</Link>
            </div>
        )
    }

    return (
        <div>
            {cart.map(product => <CartItem key={product.id} {...product} />)}
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()}>Vaciar carrito</button>
            <Link to="/checkout">Finalizar compra</Link>
        </div>
    )
}

export default Cart;