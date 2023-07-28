import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import './Cart.css';

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <div className="carrito__vacio text-center">
                <h1 className="mb-4">El carrito está vacío</h1>
                <button><Link to="/">Volver a la tienda</Link></button>
            </div>
        )
    }

    return (
        <div className="carrito__container my-5 mx-auto px-4 py-4 rounded-4">
            <p className="carrito__titulo text-center">Carrito</p>
            {cart.map(product => <CartItem key={product.id} {...product} />)}
            <hr />
            <div className="carrito__finalizar text-end">
                <p>Total: ${total}</p>
                <button><Link onClick={() => clearCart()}>Vaciar carrito</Link></button>
                <button><Link to="/checkout">Finalizar compra</Link></button>
            </div>
        </div>
    )
}

export default Cart;