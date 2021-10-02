const express = require("express");
const InfoController = require("../controllers/Info.js");
const infoRoutes = express.Router();
const info = new InfoController();

infoRoutes.get("/", info.getInfo);


module.exports = infoRoutes;
