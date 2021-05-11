import _ from "lodash";

const templates = {
  user: ["id", "name", "phone", "email",  "username", "role", "media", "is_verified"],
};

export default (data = {}, { model = '' }) => {
  // Additional configurations
  if ((model = "user")) {
    data.is_verified = Boolean(data.is_verified);
    return _.pick(data, templates["user"]);
  }

  return _.pick(data, templates[model]);
};
