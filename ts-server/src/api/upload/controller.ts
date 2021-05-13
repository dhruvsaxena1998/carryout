import { client } from "../../config/database";
import _ from "lodash";
// Types
import { File } from "./model";
import { Request, Response } from "express";
import { OkPacket } from "mysql2/promise";

// Helper
import Query from "../../helper/queries";
import { ErrorGenerator } from "../../helper/generator";

// Utils

export const upload = async (req: Request, res: Response) => {
  try {
    if (!req.file)
      return res
        .status(400)
        .send(ErrorGenerator("Media is required", "error.required", "media"));

    const file: File = {
      ..._.pick(req.file, ['fieldname', 'encoding', 'mimetype', 'filename', 'size']),
      path: "/uploads",
      url: `/uploads/${req.file.filename}`,
    };

    const [{ insertId: id }] = await client.query<OkPacket>(Query.upload.insertMedia(), file);

    res.send({ ...file, id });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export default { upload };
