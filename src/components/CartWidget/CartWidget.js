import { useContext } from 'react';
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';
import './CartWidget.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to="/cart" className='carrito__widget'>
            <FontAwesomeIcon icon={faCartShopping} className='mx-2'/>
            {totalQuantity}
        </Link>
    )
}

export default CartWidget;