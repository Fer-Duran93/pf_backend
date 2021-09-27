userInfo = [];
const logger = require("../helpers/winston.js");

class UserArray {

  /* -------------------- Register ---------------------- */

  async userRegister(userData) {
    const userSaved = await UserModel.create(userData);
    return userSaved;
  }

  async checkEmailDB (email) {
    console.log('DB', email)

    const checkEmailIfExist = await User.findOne({ email: email });
    console.log('DB',checkEmailIfExist);
    return checkEmailIfExist;
  }

  /* -------------------- Login ---------------------- */


  async mainGetPersistance(userName, photo) {
    try {
      userInfo.push(await userName, photo);
    } catch (error) {
      logger.error.error(error);
    }
  }

  async logoutPersistence() {
    try {
      return userInfo;
    } catch (error) {
      logger.error.error(error);
    }
  }

}

module.exports = UserArray;
