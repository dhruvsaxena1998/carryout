import { Router as _Router } from "express";
const Router = _Router();

import AuthRoutes from "../api/auth/routes";

Router.use("/auth", AuthRoutes);

export default Router;
