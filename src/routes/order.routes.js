const express = require("express");
const orderRoutes = express.Router();
const OrderController = require("../controllers/Order.js");
const order = new OrderController();

orderRoutes.get("/", order.viewAllOrder);
orderRoutes.get("/:id", order.viewByIdOrder);
orderRoutes.post("/", order.addOrder);
orderRoutes.delete("/:id", order.deleteOrder);

module.exports = orderRoutes;
