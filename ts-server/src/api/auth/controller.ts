import { Request, Response } from "express";
import { RowDataPacket } from "mysql2";
import Connection from "../../config/database";

// Types
import { LoginRequestBody } from "./model";

// Helper
import Query from "../../helper/queries";
import { verifyPassword } from "../../helper/hashing";
import { ErrorGenerator } from "../../helper/generator";
import { buildUserObject } from "../user/helper";

// Utils
import { randomOTP } from "../../utils/common";

export const login = async (req: Request, res: Response) => {
  const client = await Connection();
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

    res.send({
      id: user.id,
      name: user.name,
      username: user.username,
      phone: user.phone,
      role: user.role,
      is_verified: user.is_verified,
      media: user.media,
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export default { login };
