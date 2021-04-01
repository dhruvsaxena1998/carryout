import jwt from "jsonwebtoken";
import secret from "@config/jwt";

export const issue = (id) => {
  return jwt.sign({ id }, secret.jwt, { expiresIn: secret.expires });
};
