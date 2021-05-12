export const ErrorGenerator = (
  message: String,
  type: String,
  key: String,
  ...rest: any
) => ({
  message,
  type,
  context: {
    label: key,
    key,
  },
  ...rest,
});
