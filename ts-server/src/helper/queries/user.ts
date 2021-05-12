export const insertUser = () => `
  INSERT INTO USER SET ?
`

export const updateUserViaPhone = (phone: number) => `
  UPDATE USER SET ? WHERE phone = ${phone}
`;

export default {
  insertUser,
  updateUserViaPhone,
};
