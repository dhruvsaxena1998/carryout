import { Router as _Router } from "express";
const Router = _Router();

import ItemRoutes from "./api/item/routes.mjs";
import UserRoutes from "./api/user/routes.mjs";

Router.use("/items", ItemRoutes);
Router.use("/users", UserRoutes);

export default Router;
