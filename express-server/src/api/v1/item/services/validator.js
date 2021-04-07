import { body, param } from "express-validator";
import { generateSlug } from "@utils/common";
import ErrorGenerator from "@functions/error";
import concat from "lodash/concat";
import Item from "../model";

const common = [
  body("name", "Name is required").exists().isString(),
  body("price", "Price is required").exists().isNumeric(),
];

const create = concat(common, [
  body("max")
    .exists()
    .isNumeric()
    .withMessage("Max value can always be a number"),
  body("default")
    .exists()
    .isNumeric()
    .withMessage("Default value can always be a number"),
]);

const duplicate = [
  body("name").custom(async (value) => {
    const slug = generateSlug(value);

    return Item.findOne({ slug }).then((item) => {
      if (item) ErrorGenerator({ code: 409, message: "Duplicate Entry" });
    });
  }),
];

const exists = [
  param("id").custom(async (value) => {
    return Item.findById(value).then((item) => {
      if (!item) ErrorGenerator({ code: 404, message: "Menu not found!" });
    });
  }),
];

const del = [
  param("id", "ID is required")
    .exists()
    .isMongoId()
    .withMessage("Invalid format"),
];
const update = concat(common, del);

export default {
  create,
  update,
  exists,
  duplicate,
  delete: del,
};
