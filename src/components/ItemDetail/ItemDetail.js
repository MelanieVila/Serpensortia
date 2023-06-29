import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'

const ItemDetail = ({ id, nombre, img, precio, stock }) => {
    return (
        <div className='productos__detalle my-0 mx-auto'>
            <h2>{nombre}</h2>
            <h3>${precio}</h3>
            <img src={img} alt={nombre} className="productos__imagen" />

            <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)} />
        </div>
    )
}

export default ItemDetail;