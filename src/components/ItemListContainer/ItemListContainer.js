import './ItemListContainer.css';
import ItemList from "../ItemList/ItemList";
import {useEffect, useState} from "react";


const ItemListContainer = (props) => {

    const [products, setProducts] = useState([]);

    const productsJSON = [
        {
            id: 1,
            name: 'iphone 12',
            price: 1000,
            category: 'electronics',
            img: 'http://ae01.alicdn.com/kf/H2fcb496981474026b7ab87741647f831p.jpg_.webp',
            stock: 25,
            minimumStock: 1,
            description: 'Descripcion de Iphone 12'
        },
        {
            id: 2,
            name: 'samsung s21',
            price: 800,
            category: 'electronics',
            img: 'https://qph.fs.quoracdn.net/main-qimg-9ec57820b0ecb331f2bc18b32baac7e0',
            stock: 16,
            minimumStock: 1,
            description: 'Descripcion de Samsung s21'
        },
        {
            id: 3,
            name: 'Ipad 8va',
            price: 1200,
            category: 'electronics',
            img: 'https://img.joomcdn.net/1f28627d6848920fb6b7e186b5e47874586ae8a0_original.jpeg',
            stock: 0,
            minimumStock: 0,
            description: 'Descripcion de Ipad'
        },
        {
            id: 4,
            name: 'iphone 12',
            price: 1000,
            category: 'electronics',
            img: 'https://alitools.io/en/showcase/image?url=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FH9d9967dbaca542f3804771bd10d4aeef6.jpg',
            stock: 25,
            minimumStock: 1,
            description: 'Descripcion de Iphone 12'
        },
        {
            id: 5,
            name: 'samsung s21',
            price: 800,
            category: 'electronics',
            img: 'https://animemotivation.com/wp-content/uploads/2019/12/genos-figure.jpg',
            stock: 16,
            minimumStock: 1,
            description: 'Descripcion de Samsung s21'
        },
        {
            id: 6,
            name: 'Ipad 8va',
            price: 1200,
            category: 'electronics',
            img: 'https://m.media-amazon.com/images/I/41WrMKGcfbL._AC_SY450_.jpg',
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
        <div className=''>
            <ItemList products={products}/>
        </div>
    );
}

export default ItemListContainer;