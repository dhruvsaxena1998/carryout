import connection from "../../config/database.mjs";
import { slugify, sqlPagination } from "../../utils/common.mjs";
import _ from "lodash";

export const find = async (req, res) => {
  try {
    const { limit, offset } = sqlPagination(req.query);

    const query = `
      SELECT
        menu.id, menu.name, menu.slug, menu.description, menu.price,
        media.url as media
      FROM MENU
      LEFT JOIN media on media = media.id
      LIMIT ${limit} OFFSET ${offset};
  `;
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
    const query = `
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

    const [results] = await connection.query(query);

    if (results.length <= 0) {
      return res.status(404).send({ message: "Menu not found!" });
    }

    const menu = _.pick(results[0], [ "id", "name", "slug", "price", "description", "media" ]);
    const items = results.map((result) =>
      _.pickBy(result, (value, key) => key.includes("_"))
    );

    res.send({
      ...menu,
      items,
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
