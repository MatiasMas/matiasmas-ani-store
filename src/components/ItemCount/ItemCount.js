import {useState} from "react";
import './ItemCount.css';

const ItemCount = (props) => {

    const [count, setCount] = useState(1);

    const extractCount = () => {
        if (count > props.minimumStock) {
            setCount(count - 1);
        }
    }

    const addCount = () => {
        if (props.actualStock > count) {
            setCount(count + 1);
        }
    }

    const addingProductsCount = () => {
        console.log(`Ingresaste ${count} productos`);
    }


    return (
        <div className={'counter'}>
            <div className={'counterBox'}>
                <p className={'counterProductName'}>{props.name}</p>
                <div className={'counterButtons'}>
                    <button onClick={extractCount}>-</button>
                    <p>{count}</p>
                    <button onClick={addCount}>+</button>
                </div>
            </div>
            <button className={'counterAddProductsButton'} onClick={addingProductsCount} type='button'>Add to Cart</button>
        </div>
    );
}

export default ItemCount;