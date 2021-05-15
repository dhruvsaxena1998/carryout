import { client } from "../../config/database";

// Types
import { Request, Response } from "express";
import { RowDataPacket, OkPacket } from "mysql2/promise";
import {
  LoginRequestBody,
  RegisterRequestBody,
  VerifyRequestBody,
} from "./model";

// Helper
import Query from "../../helper/queries";
import Sanitize from "../../helper/sanitize";
import { hashPassword, verifyPassword } from "../../helper/hashing";
import { ErrorGenerator } from "../../helper/generator";
import { buildUserObject } from "../user/helper";

// Utils
import { randomOTP } from "../../utils/common";
import { issue } from "../../utils/jsonwebtoken";

export const login = async (req: Request, res: Response) => {
  try {
    const { phone, password }: LoginRequestBody = req.body;
    const [[result]] = await client.query<RowDataPacket[]>(
      Query.auth.GetUserLoginDetails(phone)
    );

    if (!result)
      return res
        .status(404)
        .send(ErrorGenerator("User not found!", "error.not-found", "phone"));

    const user = buildUserObject(result, { password: false });

    const isPasswordVerified = verifyPassword(password, user.password);
    if (!isPasswordVerified)
      return res
        .status(400)
        .send(
          ErrorGenerator(
            "Password mismatch",
            "error.invalid-password",
            "password"
          )
        );

    if (!user.is_verified)
      return res
        .status(401)
        .send(
          ErrorGenerator("User not verified", "error.not-verified", "user")
        );

    const data = { otp: randomOTP() };
    await client.query(Query.user.updateUserViaPhone(phone), data);

    res.send(Sanitize(user, "user"));
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, phone }: RegisterRequestBody = req.body;
    const hashedPassword = hashPassword(password);

    const data = {
      phone,
      email,
      username: email,
      password: hashedPassword,
      otp: randomOTP(),
      is_verified: false,
    };

    const [result] = await client.query<OkPacket>(
      Query.user.insertUser(),
      data
    );

    res.send(Sanitize({ ...data, id: result.insertId }, "user"));
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const verify = async (req: Request, res: Response) => {
  try {
    const { phone, otp }: VerifyRequestBody = req.body;

    const [[result]] = await client.query<RowDataPacket[]>(
      Query.auth.GetUserVerifyOTPDetails(phone, otp)
    );

    if (!result)
      return res
        .status(400)
        .send(ErrorGenerator("Invalid OTP", "error.invalid-otp", "otp"));

    const user = buildUserObject(result);

    const data: { otp: null, is_verified?: boolean } = { otp: null }
    if (!user.is_verified) {
      data.is_verified = true
    }
    await client.query(Query.user.updateUserViaPhone(phone), data);
    const jwt = issue({ id: user.id, role: user.role, email: user.email });

    res.send({
      jwt,
      user: Sanitize({ ...user, ...data}, "user"),
    });
  } catch (err) {}
};

export default { login, register, verify };
