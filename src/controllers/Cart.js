const CartService = require("../service/CartService.js");
const cart = new CartService();

class CartController {
  addCart = async (req, res) => {
    try {
      if (!req.body) {
        return res
          .status(400)
          .json({ mensaje: "No se ha podido agregar nuevo producto", error });
      } else {
        const data = await { ...req.body };
        const newProducto = await cart.addCartService(data);
        if (newProducto == false) {
          return res
            .status(400)
            .json({ mensaje: "No se ha podido agregar nuevo producto", error });
        }
        return res.status(200).json(newProducto);
      }
    } catch (error) {
      return res.status(400).json({ mensaje: "Ocurrió un error", error });
    }
  };

  viewAllCart = async (req, res) => {
    try {
      const productos = await cart.viewAllCartService();
      return res.status(200).json(productos);
    } catch (error) {
      return res.status(400).json({ mensaje: "Ocurrió un error", error });
    }
  };

  viewByIdCart = async (req, res) => {
    const _id = req.params.id;
    try {
      if (_id === "") {
        return res
          .status(404)
          .json({ mensaje: "Producto no encontrado", error });
      } else {
        const prodById = await cart.viewByIdCartService(_id);
        return res.status(200).json(prodById);
      }
    } catch (error) {
      return res.status(400).json({ mensaje: "Ocurrió un error", error });
    }
  };

  deleteCart = async (req, res) => {
    const _id = req.params.id;
    try {
      if (_id === "") {
        return res.status(404).json({ mensaje: "Producto no encontrado" });
      } else {
        const prodToDel = await cart.deleteCartService(_id);
        if (!prodToDel) {
          return res.status(404).json({ mensaje: "Producto no encontrado" });
        }
        return res.status(200).json(prodToDel);
      }
    } catch (error) {
      return res.status(400).json({ mensaje: "Ocurrió un error", error });
    }
  };

  async updateCart(req, res) {
    const _id = req.params.id;
    const data = { ...req.body };
    try {
      const cartUpdated = await cart.updateCartService(_id, data);
      return res
        .status(200)
        .json({ cartUpdated, mensaje: "Producto actualizado correctamente" });
    } catch (error) {
      logger.error.error(error);
    }
  }

}

module.exports = CartController;
