const Router = require("express").Router();
const Controller = require("./controller");

/**
 * @route /
 * @method POST
 * @description Register
 */
Router.post("/me", Controller.me);

module.exports = Router;
