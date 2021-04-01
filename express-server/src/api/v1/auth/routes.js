import { Router as _Router } from "express";
const Router = _Router();

// Controller
import Controller from "./controller";

// Middlewares
import Validator from "./validator";

/**
 * @route /
 * @method POST
 * @description Register
 */
Router.post(
  "/register",
  [Validator.register], // Middleware
  Controller.register // Controller
);

export default Router;
