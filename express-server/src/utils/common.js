import speakingurl from "speakingurl";

export const generateSlug = (str) => {
  return speakingurl(str);
};