import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


const App = () => {
    return (
        <>
            <NavBar dynamicOption={'Discover'} />
            <ItemListContainer message={'Bienvenido a Ani-Store donde podras encontrar todo aquello que deseas!'}/>
        </>
    );
}

export default App;