// Modules
import _ from "lodash";
import { slugify } from "../../utils/common";

// Types
import { Menu, MenuItem } from "./model";
import { RowDataPacket } from "mysql2/promise";

export const buildMenu = (data: RowDataPacket[]) => {
  const menu: Menu = _.pick(
    data[0],
    "id",
    "slug",
    "name",
    "price",
    "description",
    "media"
  );

  return menu;
};

export const buildMenuItems = (data: RowDataPacket[]) => {
  const menu = buildMenu(data);
  const items = data.map(
    (item): MenuItem => ({
      id: item["_id"],
      name: item["_name"],
      slug: item["_slug"],
      price: item["_price"],
      defaultQty: item["_defaultQty"],
      maxQty: item["_maxQty"],
      category: item["_category"],
    })
  );

  return {
    ...menu,
    items,
  };
};

export default {
  buildMenu,
  buildMenuItems,
};
