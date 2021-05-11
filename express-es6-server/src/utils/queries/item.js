/**
 * @param {number} limit
 * @param {number} offset
 */
export const getItemsPagination = (limit, offset) => `
  SELECT * FROM ITEM LIMIT ${limit} OFFSET ${offset}
`;

export const getItemCount = () => `
  SELECT COUNT(*) as count FROM ITEM
`;

export const insertItem = () => `
  INSERT INTO ITEM SET ?
`;

export default { getItemsPagination, getItemCount, insertItem };
