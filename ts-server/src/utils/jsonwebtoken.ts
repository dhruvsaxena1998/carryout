import jsonwebtoken from "jsonwebtoken";
import config from "../config/jwt";

interface Payload {
  id: number;
  email?: string;
  role: string | number;
}

const { secret, expires } = config();

export const issue = (payload: Payload) => {
  return jsonwebtoken.sign(payload, secret, {
    expiresIn: expires,
  });
};

export const verify = (token: string) => {
  return jsonwebtoken.verify(token, secret);
};

export default { issue, verify };
