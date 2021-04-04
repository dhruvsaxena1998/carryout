import speakingurl from "speakingurl";

export const generateSlug = (str) => {
  return speakingurl(str);
};

export const randomAlphaNumeric = (length) => {
  let s = "";
  Array.from({ length }).some(() => {
    s += Math.random().toString(36).slice(2);
    return s.length >= length;
  });
  return s.slice(0, length);
};
