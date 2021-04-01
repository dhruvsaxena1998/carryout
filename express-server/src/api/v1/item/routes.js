const Router = require("express").Router();
const Controller = require("./controller");

/**
 * @route /
 * @method GET
 * @description Get all items
 */
Router.get("/", Controller.find);

/**
 * @route /
 * @method POST
 * @description Create item
 */
Router.post("/", Controller.create);

/**
 * @route /:id
 * @method PUT
 * @description Update item
 */
Router.put("/:id", Controller.update);

/**
 * @route /:id
 * @method DELETE
 * @description Delete item
 */
Router.delete("/:id", Controller.delete);

module.exports = Router;
