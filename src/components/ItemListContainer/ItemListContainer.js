import './ItemListContainer.css';
import ItemList from "../ItemList/ItemList";
import {useEffect, useState} from "react";

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([]);

    const productsJSON = [
        {
            id: 1,
            name: 'iphone 12',
            price: 'usd 1000',
            category: 'cellphone',
            img: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020.jpg.og.jpg?202108061040',
            stock: 25,
            minimumStock: 1,
            description: 'Descripcion de Iphone 12'
        },
        {
            id: 2,
            name: 'samsung s21',
            price: 'usd 800',
            category: 'cellphone',
            img: 'https://cdn.pocket-lint.com/r/s/1200x630/assets/images/155378-phones-review-hands-on-samsung-galaxy-s21-ultra-image1-luae09ici4.JPG',
            stock: 16,
            minimumStock: 1,
            description: 'Descripcion de Samsung s21'
        },
        {
            id: 3,
            name: 'Ipad 8va generacion',
            price: 'usd 1200',
            category: 'tablet',
            img: 'https://medias.musimundo.com/medias/00406046-143516-143516-01-143516-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1MjI1MnxpbWFnZS9qcGVnfGhjMC9oYWMvMTAyODM0OTc0NTU2NDYvMDA0MDYwNDYtMTQzNTE2LTE0MzUxNl8wMS0xNDM1MTZfMDEuanBnX3NpemU1MTV8MzA0NmMzNGFhZjUwMDY2YjY5MjU0MjlkMGJlYWMxODAxZjE5ODJhZmJlOTczZThmZjE2NTQxMjU5NjE2OTA4Yw',
            stock: 0,
            minimumStock: 0,
            description: 'Descripcion de Ipad'
        }
    ];

    useEffect(() => {

        const promise = new Promise((resolve, reject) => {

            setTimeout(() => {
                if (true) {
                    resolve(productsJSON);
                } else {
                    reject();
                }
            }, 2000)

        });
        promise
            .then((result) => {
                console.log("Request OK");
                setProducts(result)
            })
            .catch(() => {
                console.log("Request FAIL");
            });
    }, []);

    return (
        <div className='ItemListContainer'>
            <ItemList products={products}/>
        </div>
    );
}

export default ItemListContainer;