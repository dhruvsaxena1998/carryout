import jwt from "jsonwebtoken";
import secret from "../config/jwt.js";

export const issue = ({ id, email }) => {
  return jwt.sign({ id, email }, secret.jwt, {
    expiresIn: secret.expires,
  });
};

export const verify = (token) => {
  return jwt.verify(token, secret.jwt);
};

export default {
  issue,
  verify,
};
