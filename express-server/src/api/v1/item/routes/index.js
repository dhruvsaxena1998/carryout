import { Router as _Router } from "express";
const Router = _Router();

import Controller from "../controllers";

// Middleware
import Validator from "../services/validator";

/**
 * @route /item
 * @method GET
 * @description Get all items
 */
Router.get("/", Controller.find);

/**
 * @route /item
 * @method POST
 * @description Create item
 */
Router.post("/", [Validator.create], Controller.create);

/**
 * @route /item/:id
 * @method PUT
 * @description Update item
 */
Router.put("/:id", [Validator.exists, Validator.update], Controller.update);

/**
 * @route /item/:id
 * @method DELETE
 * @description Delete item
 */
Router.delete("/:id", [Validator.exists, Validator.delete], Controller.delete);

export default Router;
