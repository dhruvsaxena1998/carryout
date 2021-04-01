const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const secret = require("../../../config/jwt");

const UserModel = require("../user/model");

module.exports = {
  register: async (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 12);
    const { phone, email } = req.body;
    const user = await UserModel.create({
      phone,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ id: user._id }, secret.jwt, {
      expiresIn: 86400, // expires in 24 hours
    });

    res.status(200).send({
      user,
      token,
    });
  },
};
