import { Router as _Router } from "express";
const Router = _Router();

import Controller from "./controller.mjs";

import { Upload } from "./helper.mjs";

/**
 * @route   /api/upload
 * @method  POST
 */
Router.post("/", [Upload.single("image")], Controller.upload);

export default Router;
