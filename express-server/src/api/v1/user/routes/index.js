import { Router as _Router } from "express";
const Router = _Router();

// Controller
import Controller from "../controllers";

// Policies / Middleware
import isAuthenticated from "@src/policies/isAuthenticated";
import Validator from "../services/validator";

/**
 * @route /
 * @method GET
 * @description Get loggedin user information
 */
Router.get("/me", [isAuthenticated], Controller.me);

export default Router;
