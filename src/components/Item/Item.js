import "./Item.css";

const Item = ({ id, nombre, img, precio, stock }) => {
    return (
        <div className="card">
            <div className="title">
                {nombre}
            </div>
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={img} alt={nombre} className="ItemImg"/>
                </figure>
            </div>
            <div>
                <p>
                    {precio}
                </p>
            </div>
        </div>
    )
}

export default Item;