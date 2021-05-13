import { Router as _Router } from "express";
const Router = _Router();

import Controller from "./controller";

import { upload } from "./middleware";

/**
 * @route     /api/uploads
 * @method    POST
 */
Router.post("/", [upload.single("media")], Controller.upload);

export default Router;
