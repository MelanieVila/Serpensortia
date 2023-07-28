import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ id, nombre, img, precio, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addProduct } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = { id, nombre, precio, img }
        addProduct(item, quantity)
    }

    return (
        <div className="productos__detalle my-0 mx-auto">
            <h2>{nombre}</h2>
            <h3 className="mt-3">${precio}</h3>
            <img src={img} alt={nombre} className="productos__imagen my-4" />

            <div>
                {
                    quantityAdded > 0 ? (
                        <Link to="/cart">Terminar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                    )
                }
            </div>
        </div>
    )
}

export default ItemDetail;