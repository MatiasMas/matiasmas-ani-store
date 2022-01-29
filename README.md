# Bienvenidos al proyecto final de Matias Mas

El mismo consiste en una aplicacion web utilizando React JS, entre otras herramientas para construir un E-commerce.

Se trata de una tienda de articulos geek, donde podras comprar juegos, mangas y figuras de anime.

## Comandos a tener en cuenta

Para iniciar la aplicacion utiliza el siguiente comando si es que la clonas localmente:
### `npm start`

## Changelog:

- 0.0.1: Creacion de la aplicacion utilizando create-react-app.
- 0.1.0: Se adiciona el directorio components incluyendo una NavBar muy basica para el primer desafio.
- 0.1.1: Creacion de CartWidget e ItemListContainer, por ahora sin estilos, desafio.
- 0.2.0: Se trabaja en el componente ItemCount para el desafio, el mismo se llama desde ItemListContainer. 
- 0.2.1: Creacion de ItemListContainer, ItemList e Item para el desafio del Catalogo con Maps y promises.
- 0.3.0: Se adiciona bootstrap, se crea ItemDetailContainer e ItemDetail para el desafio semanal.
- 0.4.0: En esta iteracion se adiciono el uso de Routing, ahora desde la lista de items se puede acceder a los items individuales, para ello se usaron Link del react-router-dom y para la Navbar se usaron NavLink.
- 0.4.1: Se movio la funcion onAdd al componente ItemDetailContainer para ahora manejar un estado hideCountComponent, el cual gestiona el render del componente en funcion de si ya fueron agregados elementos al carrito, como punto aparte se trabajo estableciendo conexion con un Firestore propio para gestionar productos desde ahi en la proxima iteracion, vease el metodo getProductsFromFirebase() para ello.
- 0.4.2: Trabajo realizado en el css para estructurar de forma mas prolija, cambios en NavBar.css e Item.css
- 0.4.3: Se crea CartContext para manejar el contexto de la aplicacion, CustomProvider colocado en App.
- 0.5.0: Trabajo fuerte arreglando bugs y mas que nada el pasaje de informacion a ItemDetailContainer, que ahora muestra cada item desde firebase correctamente, las categorias ahora tambien hacen filtrado segun la category de cada item, arreglo en ItemDetail donde se renderizaba antes de tener la informacion de su padre.
- 0.5.1: Se estructuro la pagina de ItemDetail con estilos mas ordenados, es un primer prototipo.
- 1.0.0: Creacion de pagina Cart, arreglo de excepciones que arrojaba el context.