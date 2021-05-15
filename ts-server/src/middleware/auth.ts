import { client } from "../config/database";
import { verify } from "../utils/jsonwebtoken";

// Types
import { IRequest } from "../@types/express";
import { Role } from "../@types/common";
import { Response, NextFunction } from "express";
import { RowDataPacket } from "mysql2/promise";

// Helpers
import Query from "../helper/queries";
import { buildUserObject } from "../api/user/helper";
import { ErrorGenerator } from "../helper/generator";

const error = ErrorGenerator("Forbidden", "error.forbidden", "user");

export default (roles: Role[]) =>
  async (req: IRequest, res: Response, next: NextFunction) => {
    try {
      const authHeader = req.headers["authorization"];
      if (!authHeader) return res.status(401).status(error);

      const [, token] = authHeader.split(/Bearer\s/);
      const { id, role } = verify(token);

      if (roles.indexOf(role) === -1) return res.status(401).status(error);

      const [[result]] = await client.query<RowDataPacket[]>(
        Query.user.getUserById(id)
      );
      if (!result) return res.status(403).send(error);

      const user = buildUserObject(result);

      req.state = {
        user,
      };

      next();
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  };
