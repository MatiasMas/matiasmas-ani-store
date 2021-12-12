import {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {

    const [detailedProduct, setDetailedProduct] = useState({});

    const detailedProductJSON =
        {
            id: 1,
            name: 'Iphone Pro Max 12',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia neque id elit sollicitudin, in viverra dolor finibus. Mauris rutrum fermentum erat at bibendum. Suspendisse nulla dui, ornare eget ligula nec, sodales feugiat lacus. Pellentesque sed imperdiet mi, sed euismod tortor. Vivamus viverra neque a dui ultricies dictum. Proin convallis justo interdum, tincidunt felis in, condimentum ligula. Suspendisse potenti. Integer blandit lorem ex, quis fermentum eros vulputate in.\n' +
                '\n' +
                'Curabitur sagittis fringilla ipsum, a scelerisque mi. Donec sit amet euismod sem. Nam porttitor magna vel semper ornare. Fusce rutrum iaculis lectus quis sodales. Nulla ex ipsum, ullamcorper nec porta in, gravida quis urna. Vestibulum mollis neque et aliquet consectetur. Nam ac enim et nulla dignissim eleifend quis sed nisi. Nunc tempus, nulla vitae faucibus commodo, eros ante vulputate justo, a gravida enim ligula convallis nisi. Aliquam a nisl tempor, varius ante et, eleifend metus. Aliquam volutpat odio quis tellus accumsan, non lobortis ipsum tincidunt.',
            price: '1000',
            category: 'cellphone',
            img: 'https://pngimg.com/uploads/iphone_12/iphone_12_PNG23.png',
            stock: 25,
            minimumStock: 1,
            stars: 5,
            rating: 4.25,
            reviews: 153,
            colors: [
                'blue',
                'red',
                'black'
            ]
        }


    const getItem = () => {
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                if (true) {
                    resolve(detailedProductJSON);
                } else {
                    reject();
                }
            }, 2000)

        });
    }

    useEffect(() => {

        const promise = getItem();

        promise
            .then((result) => {
                console.log("Request OK");
                setDetailedProduct(result)
            })
            .catch(() => {
                console.log("Request FAIL");
            });
    }, []);

    return (
        <div className={'container detail-container'}>
            <ItemDetail item={detailedProduct}/>
        </div>
    );
};

export default ItemDetailContainer;
