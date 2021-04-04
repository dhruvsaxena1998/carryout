import jwt from "jsonwebtoken";
import secret from "@config/jwt";

export const issue = (id) => {
  return jwt.sign({ id }, secret.jwt, { expiresIn: secret.expires });
};

export const verify = (token) => {
  return jwt.verify(token, secret.jwt);
};

export default {
  issue,
  verify,
};
