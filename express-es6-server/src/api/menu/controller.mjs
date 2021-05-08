import connection from "../../config/database.mjs";
import { slugify } from "../../utils/common.mjs";
import _ from "lodash";

const findMenuQuery = `
  SELECT
    menu.id, menu.name, menu.slug, menu.description, menu.price,
    media.url as media
  FROM MENU
  LEFT JOIN media on media = media.id
`;

export const find = async (req, res) => {
  try {
    const { limit = 10, offset = 0 } = req.query;

    const query = findMenuQuery + `LIMIT ${limit} OFFSET ${offset};`;
    const countQuery = `SELECT COUNT(*) as count FROM MENU`;

    const [[results], [[{ count }]]] = await Promise.all([
      connection.query(query),
      connection.query(countQuery),
    ]);

    res.send({
      results,
      pagination: {
        count,
        limit,
        offset,
      },
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const query = findMenuQuery + `WHERE menu.id = ${id}`;

    const [[menu]] = await connection.query(query);
    if (!menu) {
      return res.status(404).send({ message: "Menu not found!" });
    }

    const itemsQuery = `
      SELECT
        i.id, i.name, i.slug, i.price, i.defaultQty, i.maxQty,
        mi.category as category
      FROM menu_items as mi
      LEFT JOIN item as i on i.id = mi.item_id
      where mi.menu_id = ${menu.id}
    `;

    const [results] = await connection.query(itemsQuery);
    const [items, optional] = _.partition(
      results,
      (n) => n.category === "item"
    );

    res.send({
      ...menu,
      items,
      optional,
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

export const create = async (req, res) => {
  try {
    const { name, description, price, media, items } = req.body;

    const query = `INSERT INTO MENU SET ?`;
    const itemsQuery = `INSERT INTO MENU_ITEMS (menu_id, item_id, category) VALUES ?`;

    const data = { name, slug: slugify(name), description, price, media };
    const [result] = await connection.query(query, data);

    await connection.query(itemsQuery, [
      items.map((item) => [result.insertId, item.id, item.category]),
    ]);

    res.status(201).send({
      success: true,
      id: result.insertId,
      ...data,
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

export default { create, find, findOne };
