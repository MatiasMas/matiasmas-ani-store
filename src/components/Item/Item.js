import './Item.css';
import {Link} from "react-router-dom";

const Item = ({product}) => {
    return (
        <div className="product-card">
            <h2 className="product-card-title">
                {product.name}
            </h2>
            <img src={product.img} alt={product.name} className="product-card-img"/>
            <p className="product-card-price">
                Price: ${product.price}
            </p>
            <Link to={`/item/${product.id}`}><input className={'btn btn-primary details-button'} type="button" value='See Details'/></Link>
        </div>
    );
}

export default Item;