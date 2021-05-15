import { client } from "../../config/database";

// Types
import { MenuRequestBody } from "./model";
import { Request, Response } from "express";
import { RowDataPacket, OkPacket } from "mysql2/promise";

// Helper
import { buildMenuItems } from "./helper";
import { ErrorGenerator } from "../../helper/generator";
import Pagination from "../../helper/pagination";
import Query from "../../helper/queries";
import Sanitize from "../../helper/sanitize";

// Utils
import { slugify } from "../../utils/common";

export const find = async (req: Request, res: Response) => {
  try {
    const pagination = Pagination(req);

    const [[result], [[{ count }]]] = await Promise.all([
      client.query<RowDataPacket[]>(Query.menu.findMenu(pagination)),
      client.query<RowDataPacket[]>(Query.menu.countMenu()),
    ]);

    res.send({
      result: Sanitize(result, "menu"),
      pagination: { ...pagination, count },
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const findOne = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const [result] = await client.query<RowDataPacket[]>(
      Query.menu.findMenuById(+id)
    );

    if (result.length <= 0)
      return res
        .status(404)
        .send(ErrorGenerator("Menu not found ", "error.not-found", "id"));

    const menu = buildMenuItems(result);

    res.send(Sanitize(menu, "menu"));
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const { name, description, price, media, items }: MenuRequestBody =
      req.body;

    const menu = { name, slug: slugify(name), description, price, media };
    const [{ insertId: menu_id }] = await client.query<OkPacket>(
      Query.menu.insertMenu(),
      menu
    );

    await client.query(Query.menu.insertMenuItem(), [items.map(({ id, category }) => [menu_id, id, category])]);

    res.status(201).send(Sanitize({ id: menu_id, ...menu }, "menu"));
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export default { find, findOne, create };
