import {createContext, useState} from "react";

export const context = createContext([]);
const { Provider } = context;

const CustomProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(0);

    const addItem = (item) => {
        if (!isInCart(item.id)){
            setCart([...cart, item]);
            setQuantity(quantity + 1);
        }
    }

    const removeItem = (itemId) => {
        let cartAux = cart;
        cartAux.splice(cart.indexOf(searchInCart(itemId)), 1);
        setCart(cartAux);
        setQuantity(quantity - 1);
    }

    const clearCart = () => {
        setCart([]);
        setQuantity(0);
    }

    const isInCart = (itemId) => {
        return itemId === (searchInCart(itemId)).id;
    }

    const searchInCart = (itemId) => {
        let itemFound = cart.find(item => itemId === item.id);

        return itemFound;
    }

    const contextValue = {cart, quantity, addItem, removeItem, clearCart};

    return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    );
}

export default CustomProvider;