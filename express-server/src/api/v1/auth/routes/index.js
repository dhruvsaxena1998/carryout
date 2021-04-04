import { Router as _Router } from "express";
const Router = _Router();

// Controller
import Controller from "../controllers";

// Middlewares
import Validator from "../services/validator";

/**
 * @route /auth/login
 * @method POST
 * @description Register
 */
Router.post("/login", [Validator.login], Controller.login);

/**
 * @route /auth/register
 * @method POST
 * @description Register
 */
Router.post("/register", [Validator.register], Controller.register);

export default Router;
