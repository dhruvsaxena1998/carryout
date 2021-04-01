const Router = require("express").Router();
const Controller = require("./controller");

/**
 * @route /
 * @method GET
 * @description Get all Menu
 */
Router.get("/", Controller.find);

module.exports = Router;
