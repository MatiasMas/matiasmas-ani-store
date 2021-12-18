import './CartWidget.css';
import {Link} from "react-router-dom";

const CartWidget = (props) => {
    return (
        <div>
            <Link to={'/cart'}><img className={''} src="cart.png" alt="cart-icon"/></Link>
            <span>{props.number}</span>
        </div>
    );
}

export default CartWidget;