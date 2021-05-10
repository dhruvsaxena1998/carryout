import _ from "lodash";

export default (user) => {
  user.is_verified = Boolean(user.is_verified);

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
