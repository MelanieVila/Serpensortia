import Item from "../Item/Item";
import { Container, Row } from 'react-bootstrap';

const ItemList = ({ products }) => {
    return (
        <Container className="text-center">
            <Row>
                {products.map(prod => <Item key={prod.id} {...prod} />)}
            </Row>
        </Container>
    )
}

export default ItemList;