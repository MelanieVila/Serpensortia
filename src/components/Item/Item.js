import ItemCount from "../ItemCount/ItemCount";
import { Col } from 'react-bootstrap';
import "./Item.css";

const Item = ({ id, nombre, img, precio }) => {
    return (
        <Col lg={4} sm={6} className="productos__container">
            <h3>{nombre}</h3>
            <img src={img} alt={nombre} className="productos__imagen" />
            <h4>${precio}</h4>

            <div className="productos__detalle">
                <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)} />
            </div>
        </Col>
    )
}

export default Item;