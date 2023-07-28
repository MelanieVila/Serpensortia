import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import CartItem from "../CartItem/CartItem";
import './Cart.css';

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <div className="text-center">
                <h1 className="mb-4">El carrito está vacío</h1>
                <Button as={Link} to={"/"} className="btn btn-light btn-outline-dark btn-lg py-3 px-4">Volver a la tienda</Button>
            </div>
        )
    }

    return (
        <div className="carrito__container my-5 mx-auto px-4 py-4 rounded-4">
            <p className="carrito__titulo text-center">Carrito</p>
            {cart.map(product => <CartItem key={product.id} {...product} />)}
            <hr />
            <div className="text-end">
                <p>Total: ${total}</p>
                <Button onClick={() => clearCart()} className="btn btn-dark btn-lg py-3 px-4">Vaciar carrito</Button>
                <Button as={Link} to={"/checkout"} className="btn btn-dark btn-lg py-3 px-4">Finalizar compra</Button>
            </div>
        </div>
    )
}

export default Cart;