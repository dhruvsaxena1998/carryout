import { Pagination } from "../../helper/pagination";

export const findMenu = ({ limit, offset }: Pagination) => `
  SELECT
    menu.id, menu.name, menu.slug, menu.description, menu.price,
    media.url as media
  FROM MENU
  LEFT JOIN media on media = media.id
  LIMIT ${limit} OFFSET ${offset};
`;

export const findMenuById = (id: number) => `
  SELECT
    m.id, m.name, m.slug, m.description, m.price,
    i.id as _id, i.name as _name, i.slug as _slug, i.price as _price, i.defaultQty as _defaultQty, i.maxQty as _maxQty,
    media.url as media,
    mi.category as _category
  FROM MENU as m
  LEFT JOIN media on media = media.id
  LEFT JOIN menu_items as mi on mi.menu_id = m.id
  RIGHT JOIN item as i on i.id = mi.item_id
  WHERE m.id = ${id}
`;

export const insertMenu = () => `
  INSERT INTO MENU SET ?
`;
export const insertMenuItem = () => `
  INSERT INTO MENU_ITEMS (menu_id, item_id, category) VALUES ?
`;

export const countMenu = () => `
  SELECT COUNT(*) AS count FROM MENU;
`;

export default {
  findMenu,
  findMenuById,
  insertMenu,
  insertMenuItem,
  countMenu,
};
