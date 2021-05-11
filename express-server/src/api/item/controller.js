import connection from "../../config/database.js";

// Helpers
import Queries from "../../utils/queries.js";
import { slugify, sqlPagination } from "../../utils/common.js";

export const find = async (req, res) => {
  try {
    const { limit, offset } = sqlPagination(req.query);

    const [[results], [[{ count }]]] = await Promise.all([
      connection.query(Queries.item.getItemsPagination(limit, offset)),
      connection.query(Queries.item.getItemCount()),
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
    res.status(500).send({ message: err.message });
  }
};

export const create = async (req, res) => {
  try {
    const { name, price, defaultQty, maxQty = 1 } = req.body;
    const data = {
      name,
      slug: slugify(name),
      price,
      defaultQty,
      maxQty,
    };

    const [result] = await connection.query(Queries.item.insertItem(), data);
    res.status(201).send({ success: true, id: result.insertId, ...data });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export default { find, create };
