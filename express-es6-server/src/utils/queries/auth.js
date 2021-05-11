/**
 * @param {number} phone
 */
export const getUserLoginDetails = (phone) => `
  SElECT
    user.id, user.name, user.phone, user.username, user.email, user.password, user.is_verified, user.otp,
    media.url as media,
    role.name as role
  FROM USER
  LEFT JOIN media on media.id = media
  LEFT JOIN role on role.id = role
  WHERE phone = ${phone};
`;

/**
 * @param {number} phone
 * @param {number} otp
 */
export const getUserVerifyOTPDetails = (phone, otp) => `
  SELECT
    user.id, user.name, user.phone, user.username, user.email, user.is_verified,
    role.name as role,
    media.url as media
  FROM USER
  LEFT JOIN role on role.id = role
  LEFT JOIN media on media.id = media
  WHERE phone = ${phone} AND otp = ${otp}
`;

export default {
  getUserLoginDetails,
  getUserVerifyOTPDetails,
};
