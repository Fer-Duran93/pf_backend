const express = require("express");
const CartController = require("../controllers/Cart.js");
const cartRoutes = express.Router();
const cart = new CartController();

cartRoutes.get("/", cart.viewAllCart);
cartRoutes.get("/:id", cart.viewByIdCart);
cartRoutes.post("/", cart.addCart);
cartRoutes.delete("/:id", cart.deleteCart);
cartRoutes.put("/:id", cart.updateCart);

module.exports = cartRoutes;
