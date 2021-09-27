const UserArray = require("../db_persistence/UserArray.js");
const UserMongo = require("../db_persistence/UserMongo.js");
const mail = require("../helpers/nodemailer.js");
const logger = require("../helpers/winston.js");
const { UserModel, UserSchema } = require("../models/userSchema.js");
const { encryptPassword, checkPassword } = require("../helpers/bcrypt.js");
const database = "";

class UserFactory {
  constructor(number) {
    this.database = database;
    switch (number) {
      case 1:
        this.database = new UserMongo();
        break;
      default:
        this.database = new UserArray();
        break;
    }
  }

  /* -------------------- Register ---------------------- */

  async registerUser(userData) {
    try {
      const { email, password, username, phone } = userData;
      const checkEmailIfExist = await this.database.checkEmailDB(email);

      if (checkEmailIfExist == true) {
        return true;
      } else {
        const user = { email, password, username, phone };
        user.password = await encryptPassword(password);

        const userSaved = await this.database.userRegister(user);
        return userSaved;
      }
    } catch (error) {
      logger.error.error(error);
    }
  }

  /* -------------------- Login ---------------------- */
  async mainGetService(userInfo) {
    try {
      //const time = Date();
      // const email = 'blaze.mccullough70@ethereal.email';
      // const subjet = `User Login at ${time} / User: ${userName}`;
      // const html =
      //     `<p>The user ${userName} has logged in</p>
      // <img src="${photo}" alt="userImg" />`

      // mail(email, subjet, html);
      mainGetPersistance(userName, photo);
    } catch (error) {
      logger.error.error(error);
    }
  }

  async logoutService() {
    try {
      const user = await logoutPersistence();

      // const time = Date();
      // const email = 'blaze.mccullough70@ethereal.email';
      // const subjet = `User Logout at ${time} / User: ${user[0]} `
      // const html =
      //     `<p>The user ${user[0]} has logged out</p >
      // <img src="${user[1]}" alt="userImg" />`

      // mail(email, subjet, html);
    } catch (error) {
      logger.error.error(error);
    }
  }
}

module.exports = UserFactory;
