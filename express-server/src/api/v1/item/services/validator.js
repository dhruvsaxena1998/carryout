import { body, param } from "express-validator";
import concat from "lodash/concat";

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

const update = concat(common, [
  param("id", "ID is required")
    .exists()
    .isMongoId()
    .withMessage("Invalid format"),
]);

const del = [
  param("id", "ID is required")
    .exists()
    .isMongoId()
    .withMessage("Invalid format"),
];

export default {
  create,
  update,
  delete: del,
};
