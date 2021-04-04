import { body, param } from "express-validator";
import Menu from "../model";
import ErrorGenerator from "@functions/error";

const create = [
  body("name").exists().withMessage("Name should not be empty").isString(),
  body("price")
    .exists()
    .withMessage("Price should not be empty")
    .isNumeric()
    .withMessage("Price needs to be in numeric format"),
];

const exists = [
  param("id").custom(async (value) => {
    return Menu.findById(value).then((menu) => {
      if (!menu) ErrorGenerator({ code: 404, message: "Menu not found!" });
    });
  }),
];

export default {
  create,
  exists,
};
