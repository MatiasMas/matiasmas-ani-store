import './CartWidget.css';
import {Link} from "react-router-dom";
import {useContext} from "react";
import {context} from "../../context/CartContext";

const CartWidget = (props) => {

    const contextValue = useContext(context);

    return (
        <div className={'cart-container'}>
            <Link to={'/cart'}><img className={''} src="cart.png" alt="cart-icon"/></Link>
            <span className={'cartwidget-quantity'}>{contextValue.quantity}</span>
        </div>
    );
}

export default CartWidget;