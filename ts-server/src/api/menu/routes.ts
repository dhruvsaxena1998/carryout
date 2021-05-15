import { Router as _Router } from "express";
const Router = _Router();

import Controller from "./controller";
import Validator from "./validator";

/**
 * @route     /api/menus
 * @method    GET
 */
Router.get("/", Controller.find);

/**
 * @route     /api/menus/:id
 * @method    GET
 */
Router.get("/:id", [Validator.findOne], Controller.findOne);

/**
 * @route     /api/menus/
 * @method    POST
 */
 Router.post("/", [Validator.create], Controller.create);

export default Router;
