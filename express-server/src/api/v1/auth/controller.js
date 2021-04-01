import { validationResult } from "express-validator";
import * as jwt from "@utils/jsonwebtoken";
import bcrypt from "bcryptjs";

import User from "@api/v1/user/model";

export default {
  register: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send(errors.array());
    }

    try {
      const { phone, email, password } = req.body;

      const hashedPassword = bcrypt.hashSync(password, 12);
      const user = await User.create({
        phone,
        email,
        password: hashedPassword,
      });

      const token = jwt.issue(user._id);

      res.status(200).send({
        user,
        token,
      });
    } catch (err) {
      res.status(500).send({
        message: err.message,
        instance: err,
      });
    }
  },
};
