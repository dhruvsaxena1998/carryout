// Modules
import _ from "lodash";

// Types
import { User } from "./model";

interface SecureOptions {
  password?: boolean;
  otp?: boolean;
}

const defaultSecureOptions: SecureOptions = {
  password: true,
  otp: true,
};

export const buildUserObject = (result: {}, secure = defaultSecureOptions) => {
  const options = { ...defaultSecureOptions, ...secure };
  const keys: Array<keyof User> = [
    "id",
    "phone",
    "username",
    "email",
    "role",
    "is_verified",
    "name",
    "password",
    "otp",
    "media",
  ];
  const user = _.pick(result, keys) as User;

  // Modify user object before sending to client
  user.is_verified = !!user.is_verified

  let _key: keyof SecureOptions;
  for (_key in options) if (options[_key]) delete user[_key];

  return user;
};
