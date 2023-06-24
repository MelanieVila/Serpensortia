import ItemCount from "../ItemCount/ItemCount";
import "./Item.css";

const Item = ({ id, nombre, img, precio }) => {
    return (
        <div className="card">
            <div className="title is-3">{nombre}</div>

            <div className="card-image">
                <figure className="image is-128x128">
                    <img src={img} alt={nombre}/>
                </figure>
            </div>

            <div className="content">
                <p className="subtitle is-4">${precio}</p>
            </div>

            <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}/>
        </div>
    )
}

export default Item;