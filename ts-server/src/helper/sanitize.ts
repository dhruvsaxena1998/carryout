import _ from "lodash";

// Add templates of variables you want to remove from response
const templates = {
  user: ["password", "otp", "reset_token"],
  item: [],
};

interface dynamic {
  [key: string]: any;
}
export default (data: dynamic | dynamic[], schema: keyof typeof templates) => {
  if (_.isArray(data))
    return data.map((item) => _.omit(item, templates[schema]));

  return _.omit(data, templates[schema]);
};
