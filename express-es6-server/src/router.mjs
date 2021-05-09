import { Router as _Router } from "express";
const Router = _Router();

import ItemRoutes from "./api/item/routes.mjs";
import MenuRoutes from "./api/menu/routes.mjs";
import UserRoutes from "./api/user/routes.mjs";
import UploadRoutes from "./api/upload/routes.mjs";

Router.use("/items", ItemRoutes);
Router.use("/menus", MenuRoutes);
Router.use("/users", UserRoutes);
Router.use("/uploads", UploadRoutes);

export default Router;
