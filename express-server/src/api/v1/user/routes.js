import { Router as _Router } from "express";
const Router = _Router();

// Controller
import Controller from "./controller";

// Policies / Middleware
import isAuthorized from "@policies/isAuthorized";

/**
 * @route /
 * @method GET
 * @description Get loggedin user information
 */
Router.get("/me", [isAuthorized], Controller.me);

export default Router;
