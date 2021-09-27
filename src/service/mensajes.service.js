const MensajePersistence = require('../db_persistence/mensajesPersistence.js');
const dbMensaje = new MensajePersistence();
const logger = require('../helpers/winston.js');

async function addMsgService(data) {
    try {
        
        const mensaje = {
            author: {
                email: data.email,
                nombre: data.nombre,
                apellido: data.apellido,
                edad: data.edad,
                alias: data.alias,
                avatar: data.avatar
            },
        };
        mensaje.text = data.text;
        const newMsg = await dbMensaje.addMsgPersistence(mensaje);
        return newMsg;
    } catch (error) {
        logger.error.error(error);
    }
}

async function findAllMsgService() {
    try {
        const mensajes = await dbMensaje.findAllMsgPersistence();
        //const id = 'mensajes';
        return (mensajes);
    } catch (error) {
        logger.error.error(error);
    }
}


module.exports = {
    addMsgService,
    findAllMsgService
}