import { Router as _Router } from "express";
const Router = _Router();

import AuthRoutes from "../api/auth/routes";
import ItemRoutes from "../api/item/routes";

Router.use("/auth", AuthRoutes);
Router.use("/items", ItemRoutes);

export default Router;
