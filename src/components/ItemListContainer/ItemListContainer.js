import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = (props) => {
    return (
        <>
            <h1>{props.message}</h1>
            <ItemCount actualStock={10} minimumStock={1} name={'Batman Figure 1/3 scale'} />
        </>
    );
}

export default ItemListContainer;