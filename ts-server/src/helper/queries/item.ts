import { Pagination } from "../pagination";

export const getItems = ({ limit, offset }: Pagination) => `
  SELECT * FROM ITEM LIMIT ${limit} OFFSET ${offset}
`;

export const insertItem = () => `
  INSERT INTO ITEM SET ?
`;

export const countItems = () => `
  SELECt COUNT(*) AS count FROM ITEM
`;

export default { getItems, countItems, insertItem };
