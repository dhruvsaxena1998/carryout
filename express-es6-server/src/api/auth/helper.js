import bcrypt from "bcryptjs";
import _ from "lodash";

const saltRounds = 12;

export const hash = (password, rounds = saltRounds) => {
  const salt = bcrypt.genSaltSync(rounds);
  return bcrypt.hashSync(password, salt);
};

export const verifyPassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

export const sanitizeUser = (user) => {
  return _.pick(user, [
    "id",
    "name",
    "phone",
    "email",
    "username",
    "role",
    "media",
    "is_verified",
  ]);
};
