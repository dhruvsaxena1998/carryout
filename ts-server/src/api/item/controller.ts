import _ from "lodash";
import { client } from "../../config/database";

// Types
import { Item } from "./model";
import { Request, Response } from "express";
import { OkPacket, RowDataPacket } from "mysql2/promise";

// Helper
import Query from "../../helper/queries";
import Sanitize from "../../helper/sanitize";
import Pagination from "../../helper/pagination";

// Utils
import { slugify } from "../../utils/common";

export const find = async (req: Request, res: Response) => {
  try {
    const pagination = Pagination(req);

    const [[result], [[{ count }]]] = await Promise.all([
      client.query<RowDataPacket[]>(Query.item.getItems(pagination)),
      client.query<RowDataPacket[]>(Query.item.countItems()),
    ]);

    res.send({
      result: Sanitize(result, "item"),
      pagination: { ...pagination, count },
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const { name, price, defaultQty, maxQty }: Item = req.body;
    const data = { name, price, defaultQty, maxQty, slug: slugify(name) };

    const [result] = await client.query<OkPacket>(Query.item.insertItem(), data);

    res.status(201).send({ success: true, data: { ...data, id: result.insertId }});
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export default { find, create };
