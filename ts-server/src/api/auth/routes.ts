import { Router as _Router } from "express";
const Router = _Router();

import Controller from "./controller";
import Validator from "./validator";

/**
 * @route     /api/auth/login
 * @method    POST
 */
Router.post("/login", [Validator.login], Controller.login);

/**
 * @route     /api/auth/register
 * @method    POST
 */
Router.post("/register", [Validator.register], Controller.register);

/**
 * @route     /api/auth/verify
 * @method    POST
 */
Router.post("/verify", [Validator.verify], Controller.verify);

export default Router;
