import { Router } from "express";
const router = Router();

import { getRoute } from "../utils/common";

const MenuRoutes = require(getRoute("menu"));
const ItemRoutes = require(getRoute("item"));
const AuthRoutes = require(getRoute("auth"));
const UserRoutes = require(getRoute("user"));

router.use("/menus", MenuRoutes);
router.use("/items", ItemRoutes);
router.use("/auth", AuthRoutes);
router.use("/user", UserRoutes);

module.exports = router;
