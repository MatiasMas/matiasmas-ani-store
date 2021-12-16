import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <NavLink to='/'><span>AniStore</span></NavLink>
            <ul>
                <NavLink to='category/games'>Games</NavLink>
                <NavLink to='category/electronics'>Figures</NavLink>
                <NavLink to='category/mangas'>Mangas</NavLink>
                <CartWidget number={4}/>
            </ul>
        </nav>
    );
}

export default NavBar;