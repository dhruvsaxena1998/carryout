import connection from "../../config/database.mjs";
import { slugify, sqlPagination } from "../../utils/common.mjs";

export const find = async (req, res) => {
  try {
    const { limit, offset } = sqlPagination(req.query);

    const query = `SELECT * FROM ITEM LIMIT ${limit} OFFSET ${offset}`;
    const countQuery = `SELECT COUNT(*) as count FROM ITEM`;

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

export const create = async (req, res) => {
  try {
    const { name, price, defaultQty, maxQty = 1 } = req.body;

    const query = `INSERT INTO ITEM SET ?`;
    const data = {
      name,
      slug: slugify(name),
      price,
      defaultQty,
      maxQty,
    };

    const [result] = await connection.query(query, data);
    res.status(201).send({ success: true, id: result.insertId, ...data });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export default { find, create };
