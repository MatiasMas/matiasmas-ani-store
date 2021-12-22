import './CartWidget.css';
import {Link} from "react-router-dom";

const CartWidget = (props) => {
    return (
        <div className={'cart-container'}>
            <Link to={'/cart'}><img className={''} src="cart.png" alt="cart-icon"/></Link>
            <span className={'cartwidget-quantity'}>{props.number}</span>
        </div>
    );
}

export default CartWidget;