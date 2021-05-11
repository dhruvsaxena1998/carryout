import { Router as _Router } from "express";
const Router = _Router();

import Controller from "./controller.js";

Router.get("/", Controller.index);

export default Router;
