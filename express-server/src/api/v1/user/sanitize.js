export default (user) => {
  delete user.password;
  delete user.__v;

  return user;
};
