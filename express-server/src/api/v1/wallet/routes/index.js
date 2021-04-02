import { Router as _Router } from "express";
const Router = _Router();

// Controller
import Controller from "../controllers";

Router.get('/', Controller.index);

export default Router;