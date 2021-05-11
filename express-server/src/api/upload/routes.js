import { Router as _Router } from "express";
const Router = _Router();

import Controller from "./controller.js";

import { Upload } from "./helper.js";

/**
 * @route   /api/upload
 * @method  POST
 */
Router.post("/", [Upload.single("image")], Controller.upload);

export default Router;
