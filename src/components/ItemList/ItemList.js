import Item from "../Item/Item";
import { Container, Row } from 'react-bootstrap';

const ItemList = ({ products }) => {
    return (
        <Container className="text-center">
            <Row>
                {products.map(product => <Item key={product.id} {...product} />)}
            </Row>
        </Container>
    )
}

export default ItemList;