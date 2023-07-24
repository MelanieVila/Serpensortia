import { useContext } from 'react';
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to="/cart">
            <FontAwesomeIcon icon={faCartShopping} />
            {totalQuantity}
        </Link>
    )
}

export default CartWidget;