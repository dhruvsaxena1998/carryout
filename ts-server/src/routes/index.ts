import { Router as _Router } from "express";
const Router = _Router();

import AuthRoutes from "../api/auth/routes";
import ItemRoutes from "../api/item/routes";
import MenuRoutes from "../api/menu/routes";

import UploadRoutes from "../api/upload/routes";

Router.use("/auth", AuthRoutes);
Router.use("/items", ItemRoutes);
Router.use("/menus", MenuRoutes);
Router.use("/uploads", UploadRoutes);

export default Router;
