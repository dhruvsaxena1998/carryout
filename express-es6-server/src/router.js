import { Router as _Router } from "express";
const Router = _Router();

import AuthRoutes from "./api/auth/routes.js";

import ItemRoutes from "./api/item/routes.js";
import MenuRoutes from "./api/menu/routes.js";
import UserRoutes from "./api/user/routes.js";

import UploadRoutes from "./api/upload/routes.js";

Router.use("/auth", AuthRoutes);

Router.use("/items", ItemRoutes);
Router.use("/menus", MenuRoutes);
Router.use("/users", UserRoutes);

Router.use("/uploads", UploadRoutes);

export default Router;
