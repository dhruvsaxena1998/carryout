import { Router as _Router } from "express";
const Router = _Router();

import Controller from "./controller";
import Validator from "./validator";

/**
 * @route     /api/auth/login
 * @method    POST
 */
Router.post("/login", [Validator.login], Controller.login);

export default Router;
