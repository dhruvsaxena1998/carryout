import { Router as _Router } from "express";
const Router = _Router();

// Controller
import Controller from "./controller";

// Middleware
import AuthMiddleware from "@middlewares/authorization";

/**
 * @route /
 * @method POST
 * @description Register
 */
Router.get("/me", [AuthMiddleware], Controller.me);

export default Router;
