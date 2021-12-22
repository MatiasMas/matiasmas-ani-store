# Bienvenidos al proyecto final de Matias Mas

El mismo consiste en una aplicacion web utilizando React JS, entre otras herramientas para construir un E-commerce.

Se trata de una tienda de articulos geek.

## Comandos a tener en cuenta

Para arrancar la aplicacion utiliza el siguiente comando:
### `npm start`

Si realizaste cambios en los archivos de sass, para recompilar el css utiliza el siguiente comando:
### `npm run watch-css` 

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