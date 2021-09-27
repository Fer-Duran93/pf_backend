const UserFactory = require("../factory/factoryUser.service.js");
const UserModel = require("../models/userSchema.js");
const logger = require("../helpers/winston.js");
const config = require("../config/index.js");
const factory = new UserFactory(parseInt(config.DATABASE));

class User {
  /* -------------------- Register ---------------------- */

  async registerRenderGet(req, res) {
    res.render("register");
  }

  async registerUser(req, res) {
    try {
      const userData = await req.body;

      // hacer validaciones

      const checkEmailIfExist = await factory.registerUser(userData);

      if (checkEmailIfExist == true) {
        return res
          .status(400)
          .json({ error: "Email ya registrado. Pruebe otro" });
      } else {
        return res.status(200).json({ mensaje: "Usuario registrado" });
      }
    } catch (error) {
      logger.error.error(error);
    }
  }

  /* -------------------- Login ---------------------- */

  async loginRenderGet(req, res) {
    res.render("login");
  }

  async homeRenderGet(req, res) {
    try {
      const userInfo = { ...(await req.user) };
      mainGetService(userInfo);
      res.render("main");
    } catch (error) {
      logger.error.error(error);
    }
  }

  async logout(req, res) {
    try {
      logoutService();
      req.logout();
      res.redirect("/user/login");
    } catch (error) {
      logger.error.error(error);
    }
  }
}

module.exports = User;
