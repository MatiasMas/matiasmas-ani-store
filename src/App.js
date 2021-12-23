import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CustomProvider from "./context/CartContext";

const App = () => {

    return (
        <BrowserRouter>
            <CustomProvider>
                <NavBar/>
                <Routes>
                    <Route path='/' element={<ItemListContainer message={'Bienvenido a Ani-Store donde podras encontrar todo aquello que deseas!'}/>}/>
                    <Route path='/category/:category' element={<ItemListContainer message={'Bienvenido a Ani-Store donde podras encontrar todo aquello que deseas!'}/>}/>
                    <Route path='/item/:id' element={<ItemDetailContainer/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                </Routes>
            </CustomProvider>
        </BrowserRouter>

    );
}

export default App;