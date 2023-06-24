import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import "./CartWidget.css";

const CartWidget = () => {
    return (
        <div className='carrito'>
            <FontAwesomeIcon icon={faCartShopping} />
            <p>0</p>
        </div>
    )
}

export default CartWidget;