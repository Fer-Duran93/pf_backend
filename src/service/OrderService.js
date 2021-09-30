const OrderMongo = require("../db_persistence/OrderMongo.js");
const orderDb = new OrderMongo();
const logger = require("../helpers/winston.js");
const mailing = require("../helpers/nodemailer.js");

class OrderService {
  async addOrderService(userId, status, cartId) {
    try {
      const newProducto = await orderDb.addOrderDb(userId, status, cartId);
      if (newProducto == false) {
        return false;
      } else {
        // const email = data.email;
        // const subject = "Nuevo Pedido de Compra";
        // const html = `<p>El usuario ${data.email} a realizado un compra.
        //               Id de la compra ${newProducto._id}.</p>`;
        // await mailing(email, subject, html);

        return newProducto;
      }
    } catch (error) {
      logger.error.error(error);
    }
  }

  async viewAllOrderService() {
    try {
      const productos = await orderDb.viewAllOrderDb();
      if (productos == false) return false;
      return productos;
    } catch (error) {
      logger.error.error(error);
    }
  }

  async viewByIdOrderService(_id) {
    try {
      const prodById = await orderDb.viewByIdOrderDb(_id);
      if (prodById == false) return false;
      return prodById;
    } catch (error) {
      logger.error.error(error);
    }
  }

  async deleteOrderService(_id) {
    try {
      const prodToDel = await orderDb.deleteOrderDb(_id);
      if (prodToDel == false) return false;
      return prodToDel;
    } catch (error) {
      logger.error.error(error);
    }
  }
}

module.exports = OrderService;
