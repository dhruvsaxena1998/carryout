import { Router as _Router } from "express";

import UserRoutes from "./api/user/routes.mjs";

const Router = _Router();
Router.use("/users", UserRoutes);

export default Router;
