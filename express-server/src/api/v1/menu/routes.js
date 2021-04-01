import { Router as _Router } from "express";
const Router = _Router();

import Controller from "./controller";

/**
 * @route /
 * @method GET
 * @description Get all Menu
 */
Router.get("/", Controller.find);

export default Router;
