import { Router as _Router } from "express";
const Router = _Router();

import Controller from "./controller.mjs";
import Validator from "./validator.mjs";

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
