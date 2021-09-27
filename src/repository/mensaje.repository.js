const MensajeModel = require('../models/mensajeSchema.js');
const logger = require("../helpers/winston.js");

class BaseMensaje {
 
  async addMsgPersistence(mensaje) {
    try {
      const newMsg = await MensajeModel.create(mensaje);
      return newMsg;
    } catch (error) {
      logger.error.error(error);
    }
  }

  async findAllMsgPersistence() {
    try {
      const mensajes = await MensajeModel.find();
      return mensajes;
    } catch (error) {
      logger.error.error(error);
    }
  }
}

module.exports = BaseMensaje;
