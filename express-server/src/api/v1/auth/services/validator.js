import { check, body } from "express-validator";
import concat from "lodash/concat";
const login = [
  // Phone Validation
  body("phone", "Phone number must be 10 character long")
    .exists()
    .withMessage("Phone number cannot be empty")
    .isNumeric()
    .withMessage("Phone number must be numeric")
    .isLength({ min: 10, max: 10 })
    .withMessage("Required length: 10"),

  // Password Validation
  body("password", "The password must be 6+ chars long and contain a number")
    .exists()
    .withMessage("Password cannot be empty")
    .not()
    .isIn(["123", "password", "test"])
    .withMessage("Don't use common words as password")
    .isLength({ min: 6 })
    .withMessage("Required length: 6")
    .matches(/\d/)
    .withMessage("Must contains a number"),
];

const register = concat(login, [
  // Email Validation
  body("email", "Email must be in valid format")
    .exists()
    .withMessage("Email cannot be empty")
    .isEmail()
    .withMessage("Email format is invalid"),
]);

export default {
  login,
  register,
};
