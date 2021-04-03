import { body } from "express-validator";

const create = [
  body("name").exists().withMessage("Name should not be empty").isString(),
  body("price")
    .exists()
    .withMessage("Price should not be empty")
    .isNumeric()
    .withMessage("Price needs to be in numeric format"),
];

export default {
  create,
};
