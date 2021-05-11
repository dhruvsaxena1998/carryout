export const insertUser = () => `
  INSERT INTO USER SET ?
`;

/**
 * @param {number} phone
 */
export const updateUserViaPhone = (phone) => `
  UPDATE USER SET ? WHERE phone = ${phone}
`;


export default {
  insertUser,
  updateUserViaPhone,
};
