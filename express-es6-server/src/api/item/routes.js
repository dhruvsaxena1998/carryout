import { Router as _Router } from "express";
const Router = _Router();

import Controller from "./controller.js";
import Validator from "./validator.js";

/**
 * @route   /api/items
 * @method  GET
 */
Router.get("/", Controller.find);

/**
 * @route   /api/items
 * @method  POST
 */
Router.post("/", [Validator.create], Controller.create);

export default Router;
