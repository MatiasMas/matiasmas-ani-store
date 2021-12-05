const CartWidget = (props) => {
    return (
        <div>
            <a href="#"><img className={''} src="cart.png" alt="cart-icon"/></a>
            <span>{props.number}</span>
        </div>
    );
}

export default CartWidget;