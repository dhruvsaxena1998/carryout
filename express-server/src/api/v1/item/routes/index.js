import { Router as _Router } from "express";
const Router = _Router();

import Controller from "../controllers";

// Middleware
import Validator from "../services/validator";

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
Router.post("/", [Validator.create], Controller.create);

/**
 * @route /:id
 * @method PUT
 * @description Update item
 */
Router.put("/:id", [Validator.delete], Controller.update);

/**
 * @route /:id
 * @method DELETE
 * @description Delete item
 */
Router.delete("/:id", [Validator.delete], Controller.delete);

export default Router;
