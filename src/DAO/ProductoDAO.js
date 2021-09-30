const MongoCxn = require("../database/MongoCxn.js");

class DatabaseProductoDao {
  constructor() {
    this.cxn = new MongoCxn();
    this.msg = console.log("*** Base de Datos Mongo");
  }

  async addPersistenceProducto(dataToDb) {
    try {
    } catch (error) {}
  }

  async findAllPersistenceProducto() {
    try {
    } catch (error) {}
  }

  async findByIDPersistenceProducto(_id) {
    try {
    } catch (error) {}
  }

  async deletePersistenceProducto(_id) {
    try {
    } catch (error) {}
  }

  async updatePersistenceProducto(_id, data) {
    try {
    } catch (error) {}
  }
}

module.exports = DatabaseProductoDao;
