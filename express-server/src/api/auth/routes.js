import { Router as _Router } from "express";
const Router = _Router();

import Controller from "./controller.js";
import Validation from "./validator.js";

/**
 * @route         /api/auth/login
 * @method        POST
 * @description   Login
 */
Router.post("/login", [Validation.login], Controller.login);

/**
 * @route         /api/auth/register
 * @method        POST
 * @description   Register
 */
Router.post("/register", [Validation.register], Controller.register);

/**
 * @route         /api/auth/verify
 * @method        POST
 * @description   VerifyOTP
 */
Router.post("/verify", [Validation.verify], Controller.verifyOTP);

export default Router;
