import _ from "lodash";
import { client } from "../../config/database";
// Types
import { IFile } from "./model";
import { Request, Response } from "express";
import { OkPacket } from "mysql2/promise";

// Helper
import Query from "../../helper/queries";
import { UploadToS3, DownloadFromS3 } from "../../helper/S3";
import { ErrorGenerator } from "../../helper/generator";

// Utils

export const upload = async (req: Request, res: Response) => {
  try {
    if (!req.file)
      return res
        .status(400)
        .send(ErrorGenerator("Media is required", "error.required", "media"));

    const result = await UploadToS3(req.file)

    const file: IFile = {
      ..._.pick(req.file, ['fieldname', 'encoding', 'mimetype', 'filename', 'size', 'path']),
      url: `/uploads/${result.Key}`,
      etag: result.ETag,
      location: result.Location
    }

    const [{ insertId: id }] = await client.query<OkPacket>(Query.upload.insertMedia(), file);

    res.send({ ...file, id });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const download = (req: Request, res: Response) => {
  try {
    const { key } = req.params
    const readStream = DownloadFromS3(key)

    readStream.pipe(res);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
} 

export default { upload, download };
