import { Router as _Router } from "express";
const Router = _Router();

import Controller from "./controller.mjs";

/**
 * @route   /api/items
 * @method  GET
 */
Router.get("/", Controller.find);

/**
 * @route   /api/items
 * @method  POST
 */
Router.post("/", Controller.create);

export default Router;
