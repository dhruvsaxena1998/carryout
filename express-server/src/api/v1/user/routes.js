import { Router as _Router } from "express";
const Router = _Router();

import Controller from "./controller";

/**
 * @route /
 * @method POST
 * @description Register
 */
Router.post("/me", Controller.me);

export default Router;
