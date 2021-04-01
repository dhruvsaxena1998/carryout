export default {
  jwt: process.env.JWT_SECRET,
  expires: process.env.JWT_EXPIRES || "30d",
};
