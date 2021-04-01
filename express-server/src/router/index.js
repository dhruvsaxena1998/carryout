import { Router } from "express";
const router = Router();

import AuthRoutes from "@api/v1/auth/routes";
import MenuRoutes from "@api/v1/menu/routes";
import ItemRoutes from "@api/v1/item/routes";
import UserRoutes from "@api/v1/user/routes";

router.use("/auth", AuthRoutes);
router.use("/item", ItemRoutes);
router.use("/menu", MenuRoutes);
router.use("/user", UserRoutes);

export default router;
