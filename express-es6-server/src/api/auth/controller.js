import connection from "../../config/database.js";

import Queries from "../../utils/queries.js";
import { issue } from "../../utils/jsonwebtoken.js";
import { randomOTP } from "../../utils/common.js";

import { hash, verifyPassword } from "./helper.js";

// Helpers
import Sanitize from "../../helpers/sanitize.js";
import ErrorGenerator from "../../helpers/error-generator.js";

export const login = async (req, res) => {
  try {
    const { phone, password } = req.body;
    const [[user]] = await connection.query(
      Queries.auth.getUserLoginDetails(phone)
    );

    if (!user) {
      return res
        .status(404)
        .send(ErrorGenerator("User not found", "any.not-found", "phone"));
    }

    if (!user.is_verified) {
      return res
        .status(401)
        .send(ErrorGenerator("Not verified!", "any.not-verified"));
    }

    const isCorrectPassword = verifyPassword(password, user.password);
    if (!isCorrectPassword) {
      return res
        .status(400)
        .send(ErrorGenerator("Password mismatch", "any.incorrect-password", "password"));
    }

    if (!user.otp) {
      const data = { otp: randomOTP() };
      await connection.query(Queries.user.updateUserViaPhone(phone), data);
    }

    res.send(Sanitize(user, { model: "user" }));
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const register = async (req, res) => {
  try {
    const { phone, password: pass, email } = req.body;
    const password = hash(pass, 12);

    const data = {
      phone,
      password,
      email,
      username: email,
      otp: randomOTP(),
      is_verified: false,
    };

    const [result] = await connection.query(Queries.user.insertUser(), data);

    res.send({
      id: result.insertId,
      email,
      phone,
      is_verified: false,
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const verifyOTP = async (req, res) => {
  try {
    const { phone, otp } = req.body;
    const [[user]] = await connection.query(
      Queries.auth.getUserVerifyOTPDetails(phone, otp)
    );

    if (!user) {
      return res
        .status(400)
        .send(ErrorGenerator("OTP is invalid", "any.invalid", "otp"));
    }

    const data = { otp: null, is_verified: true };
    await connection.query(Queries.user.updateUserViaPhone(phone), data);

    const jwt = issue({ id: user.id, email: user.email, role: user.role });
    res.send({
      jwt,
      user: Sanitize(user, { model: "user" }),
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export default { login, register, verifyOTP };
