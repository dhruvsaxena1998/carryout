export const GetUserLoginDetails = (phone: number) => `
  SElECT
    user.id, user.name, user.phone, user.username, user.email, user.password, user.is_verified, user.otp,
    media.url as media,
    role.name as role
  FROM USER
  LEFT JOIN media on media.id = media
  LEFT JOIN role on role.id = role
  WHERE phone = ${phone};
`;

export const GetUserVerifyOTPDetails = (phone: number, otp: number) => `
  SELECT
    user.id, user.name, user.phone, user.username, user.email, user.is_verified,
    role.name as role,
    media.url as media
  FROM USER
  LEFT JOIN role on role.id = role
  LEFT JOIN media on media.id = media
  WHERE phone = ${phone} AND otp = ${otp}
`;

export default { GetUserLoginDetails, GetUserVerifyOTPDetails };
