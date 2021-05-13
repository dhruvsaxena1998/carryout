import { Router as _Router } from "express";
const Router = _Router();

import Controller from "./controller";

import { upload, GetMediaValidator } from "./middleware";

/**
 * @route     /api/uploads
 * @method    POST
 */
Router.post("/", [upload.single("media")], Controller.upload);

/**
 * @route     /api/uploads/:key
 * @method    GET
 * @desc      Download and streams media file
 */
Router.get("/:key", [GetMediaValidator], Controller.download);

export default Router;
