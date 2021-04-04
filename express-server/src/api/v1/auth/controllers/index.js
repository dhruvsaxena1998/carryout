import { validationResult } from "express-validator";
import * as jwt from "@utils/jsonwebtoken";
import bcrypt from "bcryptjs";

import User from "@api/v1/user/models";
import sanitizeUser from "@api/v1/user/services/sanitize";
import ErrorGenerator from "@functions/error";

const login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      ErrorGenerator({ code: 400, message: errors.array() });
    }

    const { phone, password } = req.body;

    const user = await User.findOne({ phone });
    if (!user) {
      ErrorGenerator({
        code: 404,
        message: `There is no user with provided ${phone}`,
      });
    }

    const isVerified = bcrypt.compareSync(password, user.password);
    if (!isVerified) {
      ErrorGenerator({
        code: 400,
        message: "Verification failed! Incorrect password.",
      });
    }

    const token = jwt.issue(user._id);
    res.status(200).send({
      user: sanitizeUser(user._doc),
      token,
    });
  } catch (err) {
    res.status(err.code || 500).send({
      message: err.message,
      instance: err,
    });
  }
};

const register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      ErrorGenerator({ code: 400, message: errors.array() });
    }

    const { phone, email, password } = req.body;

    const hashedPassword = bcrypt.hashSync(password, 12);
    const user = await User.create({
      phone,
      email,
      password: hashedPassword,
    });

    const token = jwt.issue(user._id);

    res.status(200).send({
      user: sanitizeUser(user._doc),
      token,
    });
  } catch (err) {
    res.status(err.code || 500).send({
      message: err.message,
      instance: err,
    });
  }
};

export default {
  login,
  register,
};
