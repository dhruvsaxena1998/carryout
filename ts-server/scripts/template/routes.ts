import { Router as _Router } from "express";
const Router = _Router();

import Controller from "./controller";

/**
 * @route     /api/{{apiName}}
 * @method    GET
 */
Router.get("/", Controller.index);

export default Router;
