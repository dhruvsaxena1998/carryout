import _ from "lodash";

const templates = {
  user: ["password", "otp", "reset_token"]
};

export default (
  data: { [key: string]: any },
  schema: keyof typeof templates
) => {
  return _.omit(data, templates[schema]);
};
