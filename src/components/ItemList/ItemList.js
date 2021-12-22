import './ItemList.css';
import Item from "../Item/Item";

const ItemList = ({products}) => {

    return (
        <ul className='product-cards'>
            {products.map(product => <Item key={product.id} id={product.id} product={product}/>)}
        </ul>
    );

}

export default ItemList;