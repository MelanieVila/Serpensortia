import { Link } from 'react-router-dom';
import { Col, Button } from 'react-bootstrap';
import "./Item.css";

const Item = ({ id, nombre, img, precio }) => {
    return (
        <Col lg={4} sm={6} className="py-5">
            <h3>{nombre}</h3>
            <img src={img} alt={nombre} className="productos__imagen" />
            <h4>${precio}</h4>

            <Button as={Link} to={`/item/${id}`} className="btn btn-light btn-outline-dark btn-lg py-3 px-4">Ver detalle</Button>
        </Col>
    )
}

export default Item;