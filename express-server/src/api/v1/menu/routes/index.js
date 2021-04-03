import { Router as _Router } from "express";
const Router = _Router();

import Controller from "../controllers";

// Middlewares
import Validator from "../services/validator";

/**
 * @route /
 * @method GET
 * @description Get all Menu
 */
Router.get("/", Controller.find);

/**
 * @route /
 * @method POST
 * @description Create a menu
 */
Router.post("/", [Validator.create], Controller.create);

export default Router;
