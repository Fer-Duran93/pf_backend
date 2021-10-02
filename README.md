# PROYECTO FINAL BACKEND

1. [Sobre el proyecto](#ABOUT)
2. [Endpoints - Ejemplos / Criterio (Http)](#HTTP)
3. [Postman](#POSTMAN)
4. [Librerias Utilizadas](#LIBRERIAS)
---

## <a>#ABOUT</a>

- Proyecto final del curso de backend Coderhouse. El mismo trabaja con base de datos MongoDB

## <a>#HTTP</a> 

* USER:
- POST /user/register -> Permite el registro de usuario con encriptacón de password.
Ejemplo:
{
    "email": "maria@quiz.com",
    "password": "micalle123",
    "username": "Maria",
    "phone": 1223366788
}

- POST /user/login -> Permite el ingreso al sistema con validación de credenciales y tiempo de sesión.
Ejemplo:
{
    "email": "maria@quiz.com",
    "password": "micalle123"
}

- GET /user/logout -> Desloguea al usuario de la sesión.

Caso que el usuario no este logueado no tendrá acceso al sistema y será redireccionado al inicio "/".

* PRODUCTO:
(Valida usuario logueado).
- GET /api/productos -> Trae todos los productos.
- GET by ID /api/productos/:id -> Trae producto por ID desde la base de datos.
- GET by CATEGORY /api/productos/category/:category -> Filtra producto(s) por categoria.
- POST /api/productos -> Guarda los productos en la base de datos a traves (Alternativa desde Postman (req.body) y con  Socket.io (req.productos)).
Ejemplo:
{
    "title": "Pan",
    "price": 30,
    "thumbnail": "https://cdn0.iconfinder.com/data/icons/bakery-and-dessert-color/64/Bread_bun_bakery_doodle_food_icon-128.png",
    "description": "Pan de Trigo",
    "category": "Harina",
    "stock": 1000
}

- DELETE /api/productos/:id -> Elimina producto por ID informado.
- POST /api/productos/:id -> Actualiza un producto por ID informado.

* CART:
(Valida usuario logueado).
- GET /api/cart -> Trae todos los carritos de compra guardados.
- GET by ID /api/cart/:id -> Trae un carrito especifico por su ID.
- POST /api/cart -> Guarda el carrito del usuario que este logueado. Se implementaria en el fronend lo necesario para lograr tener un carrito.
Ejemplo:
{
    "direction": "Av. Pampa 123",
    "email": "pedro@quiz.com",
    "items": [
        {
            "title": "Naranja",
            "price": 50,
            "description": "Naranja Jugo",
            "category": "Frutas",
            "quantity": 12
        },
        {
            "title": "Banana",
            "price": 120,
            "description": "Banana Ecuador",
            "category": "Frutas",
            "quantity": 6
        }
    ]
}

- UPDATE /api/cart:id -> Devuelve al frontend un array con toda la información del carrito por su ID. Se implementaria vista y lógica para modificar los valores dentro de un carrito , como eliminar items, cambiar cantidad, etc y poder devolver a la base de datos.
- DELETE /api/cart:id -> Elimina un carrito completo por su ID.

* ORDER:
(Ejecuta el pedido final de una compra. Se implementaria en el frontend lógica y vista para generar un array que contenga los datos del usuario logueado en sesión -como buyer- a través del ID , el status de la orden y un array con todos los items guardados en su carrito previamente creado, también cargado a traves del ID correspondiente).
- POST /api/order -> Envia y guarda la orden de compra.
Ejemplo:
{
    "userId": "61553d6981d5de474926cafa",
    "status": "Generada",
    "cartId": "615534e769cade37b7e01721"
}

- GET /api/order -> Devuelve todas las ordenes almacenadas.
- GET /api/order/:id -> Devuelve una orden especifica por su ID.
- DELETE /api/order/:id -> Elimina una orden especifica por su ID.

## <a>#POSTMAN</a>

https://www.getpostman.com/collections/e0fa3eded4cd156a3f43

## <a>#LIBRERIAS / DEPENDENCIAS USADAS</a>

- bcryptjs 
- connect-flash 
- cookie-parser 
- dotenv 
- ejs 
- express
- express-handlebars 
- express-session 
- jsonwebtoken 
- mongoose 
- morgan 
- nodemailer 
- nodemon 
- passport 
- passport-jwt 
- passport-local 
- pug 
- socket.io 
- socketio 
- winston 
