export const updateUserViaPhone = (phone: number) => `
  UPDATE USER SET ? WHERE phone = ${phone}
`;

export default {
  updateUserViaPhone,
};
