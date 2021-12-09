import './ItemList.css'
import Item from "../Item/Item";

const ItemList = ({products}) => {

    return (
        <ul className='ListGroup'>
            {products.map(product => <Item id={product.id} product={product}/>)}
        </ul>
    );

}

export default ItemList;