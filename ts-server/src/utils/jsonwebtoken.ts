import jsonwebtoken from "jsonwebtoken";
import config from "../config/jwt";

// Types
import { Role } from "../middleware/auth";

interface Payload {
  id: number;
  email?: string;
  role: Role;
}

const { secret, expires } = config();

export const issue = (payload: Payload) => {
  return jsonwebtoken.sign(payload, secret, {
    expiresIn: expires,
  });
};

export const verify = (token: string) => {
  return jsonwebtoken.verify(token, secret) as Payload;
};

export default { issue, verify };
