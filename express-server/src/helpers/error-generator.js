export default (message, type, key) => {
  return {
    message,
    type,
    context: {
      label: key,
      key,
    },
  };
};
