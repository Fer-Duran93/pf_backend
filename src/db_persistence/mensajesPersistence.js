const MensajeRepository = require ('../repository/MensajeRepository.js');
const MensajeModel = require('../models/mensajeSchema.js');
const logger = require('../helpers/winston.js');

class MensajePersistence extends MensajeRepository {

    async normalizedDataPersistence() {
        try {
            const mensajes = await MensajeModel.find();
            return mensajes;
        } catch (error) {
            logger.error.error(error);
        }
    }
}

module.exports = MensajePersistence;