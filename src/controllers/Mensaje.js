const {
  addMsgService,
  findAllMsgService,
} = require("../service/MensajeService.js");
const logger = require("../helpers/winston.js");

class Mensaje {
  async addMsg(req, res) {
    try {
      if (!req) {
        return res
          .status(404)
          .json({ mensaje: "Error al agregar un producto" });
      }
      const data = await { ...req };
      await addMsgService(data);
    } catch (error) {
      logger.error.error(error);
    }
  }

  async findAllMsg(req, res) {
    try {
      let { id, mensajes } = await findAllMsgService();
      return res.status(200).json({ id, mensajes });
    } catch (error) {
      logger.error.error(error);
    }
  }
}

module.exports = Mensaje;
