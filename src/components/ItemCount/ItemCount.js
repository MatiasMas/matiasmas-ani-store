import {useContext, useEffect, useState} from "react";
import './ItemCount.css';
import {context} from "../../context/CartContext";

const ItemCount = ({minimumStock, actualStock, onAdd, item}) => {

    const contextValue = useContext(context);
    const [count, setCount] = useState(minimumStock);

    const extractCount = () => {
        if (count > minimumStock) {
            setCount(count - 1);
        }
    }

    const addCount = () => {
        if (actualStock > count) {
            setCount(count + 1);
        }
    }

    return (
        <div className={'counter'}>
            <div className={'counterBox'}>
                <div className={'counterButtons'}>
                    <button disabled={minimumStock === 0} onClick={extractCount}>-</button>
                    <p>{count}</p>
                    <button disabled={minimumStock === 0} onClick={addCount}>+</button>
                </div>
            </div>
            <button disabled={minimumStock === 0} className={'counterAddProductsButton'} onClick={() => {
                onAdd(count);
                contextValue.addItem(item);
            }
            } type='button'>Add to Cart</button>
        </div>
    );
}

export default ItemCount;