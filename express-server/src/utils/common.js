const speakingurl = require("speakingurl");
const path = require("path");

const APIDIR = path.join(__dirname, "../api/v1");
module.exports.getSlug = (str) => {
  return speakingurl(str);
};

module.exports.getRoute = (collection) => {
  return `${APIDIR}/${collection}/routes`
}