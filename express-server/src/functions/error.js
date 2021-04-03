export default ({ code, message }) => {
  throw { code, type: typeof message, message };
};
