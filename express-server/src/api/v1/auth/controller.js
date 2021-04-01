import * as jwt from "@utils/jsonwebtoken";
import bcrypt from "bcryptjs";

import User from "@api/v1/user/model";

export default {
  register: async (req, res) => {
    const password = bcrypt.hashSync(req.body.password, 12);
    const { phone, email } = req.body;
    const user = await User.create({
      phone,
      email,
      password,
    });

    const token = jwt.issue(user._id);

    res.status(200).send({
      user,
      token,
    });
  },
};
