import './Item.css'
import ItemCount from "../ItemCount/ItemCount";

const Item = ({product}) => {
    return (
        <div className="CardItem">
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
            <ItemCount actualStock={product.stock} minimumStock={1} name={'Batman Figure 1/3 scale'} />
            <button className='detailsButton'>Details</button>
        </div>
    );
}

export default Item;