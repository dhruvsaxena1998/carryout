const Router = require("express").Router();
const Controller = require("./controller");

/**
 * @route /
 * @method POST
 * @description Register
 */
Router.post("/register", Controller.register);

module.exports = Router;
