import './Item.css';
import {Link} from "react-router-dom";

const Item = ({product}) => {
    return (
        <div className="CardItem">
            <Link to={`/item/${product.id}`}>
                <div className="ContainerItem">
                    <h2 className="ItemHeader">
                        {product.name}
                    </h2>
                </div>
                <img src={product.img} alt={product.name} className="ItemImg"/>
                <p className="Info">
                    Category: {product.category}
                </p>

                <p className="Info">
                    Price: {product.price}
                </p>
            </Link>
        </div>
    );
}

export default Item;