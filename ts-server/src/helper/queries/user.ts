export const insertUser = () => `
  INSERT INTO USER SET ?
`;

export const getUserById = (id: number) => `
  SELECT
    user.id, user.name, user.phone, user.username, user.email, user.is_verified,
    role.name as role,
    media.url as media
  FROM USER
  LEFT JOIN role on role.id = role
  LEFT JOIN media on media.id = media
  WHERE user.id = ${id}
`;

export const updateUserViaPhone = (phone: number) => `
  UPDATE USER SET ? WHERE phone = ${phone}
`;

export default {
  insertUser,
  getUserById,
  updateUserViaPhone,
};
