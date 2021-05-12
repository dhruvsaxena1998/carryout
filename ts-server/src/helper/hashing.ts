import bcrypt from "bcryptjs";

const saltRounds = 12;

export const hashPassword = (password: string, rounds = saltRounds) => {
  const salt = bcrypt.genSaltSync(rounds);
  return bcrypt.hashSync(password, salt);
};

export const verifyPassword = (password: string, hash: string = "") => {
  return bcrypt.compareSync(password, hash);
};

export default { hashPassword, verifyPassword };
