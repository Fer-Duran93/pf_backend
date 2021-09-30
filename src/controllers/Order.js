const OrderService = require("../service/OrderService.js");
const order = new OrderService();

class OrderController {
  addOrder = async (req, res) => {
    try {
      if (!req.body) {
        return res
          .status(400)
          .json({ mensaje: "No se ha podido cargar la orden", error });
      } else {
        const userId = await req.body.userId;
        const status = await req.body.status;
        const cartId = await req.body.cartId;

        const newOrder = await order.addOrderService(userId, status, cartId);
        if (newOrder == false) {
          return res
            .status(400)
            .json({ mensaje: "No se ha podido cargar la orden", error });
        }
        return res.status(200).json(newOrder);
      }
    } catch (error) {
      return res.status(400).json({ mensaje: "Ocurrió un error", error });
    }
  };

  viewAllOrder = async (req, res) => {
    try {
      const orders = await order.viewAllOrderService();
      return res.status(200).json(orders);
    } catch (error) {
      return res.status(400).json({ mensaje: "Ocurrió un error", error });
    }
  };

  viewByIdOrder = async (req, res) => {
    const _id = req.params.id;
    try {
      if (_id === "") {
        return res.status(404).json({ mensaje: "Orden no encontrada", error });
      } else {
        const orderById = await order.viewByIdOrderService(_id);
        return res.status(200).json(orderById);
      }
    } catch (error) {
      return res.status(400).json({ mensaje: "Ocurrió un error", error });
    }
  };

  deleteOrder = async (req, res) => {
    const _id = req.params.id;
    try {
      if (_id === "") {
        return res.status(404).json({ mensaje: "Orden no encontrada" });
      } else {
        const orderToDel = await order.deleteOrderService(_id);
        if (!orderToDel) {
          return res.status(404).json({ mensaje: "Orden no encontrada" });
        }
        return res.status(200).json(orderToDel);
      }
    } catch (error) {
      return res.status(400).json({ mensaje: "Ocurrió un error", error });
    }
  };
}

module.exports = OrderController;
