import _omit from "lodash/omit";
const toSanitize = ["password", "__v", "resetPasswordToken"];

export default (user) => {
  return _omit(user, toSanitize);
};
