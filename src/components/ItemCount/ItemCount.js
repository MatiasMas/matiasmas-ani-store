import {useState} from "react";
import './ItemCount.css';

const ItemCount = (props) => {

    const [count, setCount] = useState(props.minimumStock);

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

    const onAdd = () => {
        console.log(`Ingresaste ${count} productos`);
    }


    return (
        <div className={'counter'}>
            <div className={'counterBox'}>
                <div className={'counterButtons'}>
                    <button disabled={props.minimumStock === 0} onClick={extractCount}>-</button>
                    <p>{count}</p>
                    <button disabled={props.minimumStock === 0} onClick={addCount}>+</button>
                </div>
            </div>
            <button disabled={props.minimumStock === 0} className={'counterAddProductsButton'} onClick={onAdd} type='button'>Add to Cart</button>
        </div>
    );
}

export default ItemCount;