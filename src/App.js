import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    return (
        <>
            <NavBar dynamicOption={'Discover'} />
            {/*<ItemListContainer message={'Bienvenido a Ani-Store donde podras encontrar todo aquello que deseas!'}/>*/}
            <ItemDetailContainer/>
        </>
    );
}

export default App;