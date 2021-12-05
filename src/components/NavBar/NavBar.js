import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget";

const NavBar = (props) => {
    return (
        <nav>
            <span>AniStore</span>
            <ul>
                <a href="#">{props.dynamicOption}</a>
                <a href="#">Login</a>
                <a href="#">Register</a>
                <CartWidget number={4}/>
            </ul>
        </nav>
    );
}

export default NavBar;