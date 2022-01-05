import {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css';
import {useParams} from "react-router-dom";
import {getProductsFromFirebase} from "../../firebase/firebase";

const ItemDetailContainer = () => {

    const [detailedProduct, setDetailedProduct] = useState({});
    let {id} = useParams();

    const getItem = (id, items) => {
        return items.filter(item => item.id -1 === id - 1);
    }

    useEffect(() => {
        const promiseFirebase = getProductsFromFirebase();
        promiseFirebase.then((result) => {
            const myItem = getItem(id, result);

            setDetailedProduct(myItem[0]);
        })
        .catch(() => {
            console.log("Request FAIL");
        });

    }, []);

    if (detailedProduct === undefined || Object.keys(detailedProduct).length === 0) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    } else {
        return (
            <div className={'container detail-container'}>
                <ItemDetail item={detailedProduct}/>
            </div>
        );
    }

};

export default ItemDetailContainer;
