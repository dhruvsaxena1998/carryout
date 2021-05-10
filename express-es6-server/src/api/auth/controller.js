import connection from "../../config/database.js";

import { issue } from "../../utils/jsonwebtoken.js";
import { randomOTP } from "../../utils/common.js";

import { hash, verifyPassword, sanitizeUser } from "./helper.js";
import ErrorGenerator from "../../helpers/error-generator.js";

export const login = async (req, res) => {
  try {
    const { phone, password } = req.body;

    const query = `
      SElECT
        user.id, name, phone, username, email, password, is_verified, otp,
        media.url as media
      FROM USER
      LEFT JOIN media on media.id = media
      WHERE phone = ${phone};
    `;
    const [[user]] = await connection.query(query);

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
        .send(
          ErrorGenerator(
            "Password mismatch",
            "any.incorrect-password",
            "password"
          )
        );
    }

    if (!user.otp) {
      await connection.query(
        `UPDATE USER SET otp = ${randomOTP()} WHERE phone = ${phone}`
      );
    }

    res.send(sanitizeUser(user));
  } catch (err) {
    res.status(500).send(err.message);
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
      is_verified: false
    };

    const query = `INSERT INTO USER SET ?`;
    const [result] = await connection.query(query, data);

    res.send({
      id: result.insertId,
      email,
      phone,
      is_verified: false,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const verifyOTP = async (req, res) => {
  try {
    const { phone, otp } = req.body;

    const query = `
      SELECT
        user.id, name, phone, username, email, is_verified,
        media.url as media
      FROM USER
      LEFT JOIN media on media.id = media
      WHERE phone = ${phone} AND otp = ${otp}
    `;

    const [[user]] = await connection.query(query);

    if (!user) {
      return res
        .status(400)
        .send(ErrorGenerator("OTP is invalid", "any.invalid", "otp"));
    }

    const data = { otp: null };
    if (!user.is_verified) data.is_verified = true;

    const updateQuery = `UPDATE USER SET ? WHERE phone = ${phone}`;
    await connection.query(updateQuery, data);

    const jwt = issue({ id: user.id, email: user.email });
    res.send({
      jwt,
      user: sanitizeUser(user),
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
export default { login, register, verifyOTP };
