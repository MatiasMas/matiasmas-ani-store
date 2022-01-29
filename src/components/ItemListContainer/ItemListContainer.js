import './ItemListContainer.css';
import ItemList from "../ItemList/ItemList";
import {useEffect, useState} from "react";
import {getProductsFromFirebase} from "../../firebase/firebase";
import {useParams} from "react-router-dom";


const ItemListContainer = (props) => {

    const [products, setProducts] = useState([]);
    let {category} = useParams();

    const getItemsByCategory = (category, items) => {
        if (category === undefined){
            return items;
        }

        return items.filter(item => item.category === category);
    }

    useEffect(() => {
        const promiseFirebase = getProductsFromFirebase();
        promiseFirebase.then((result) => {
            const myItems = getItemsByCategory(category, result);

            setProducts(myItems);
        })
        .catch(() => {
            console.log("Request FAIL");
        });

    }, [category]);

    if (products.length === 0){
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    } else {
        return (
            <div className=''>
                <ItemList products={products}/>
            </div>
        );
    }
}

export default ItemListContainer;