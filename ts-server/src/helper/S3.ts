import fs from "fs";
import S3, { PutObjectRequest, GetObjectRequest } from "aws-sdk/clients/s3";

import { File } from "../api/upload/model";

const s3 = new S3({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
});

const Bucket = process.env.AWS_BUCKET_NAME || "carryout-files";

// Uploads a file to S3
export const UploadToS3 = (file: File) => {
  const stream = fs.createReadStream(file.path);

  const params: PutObjectRequest = {
    Bucket,
    Key: file.filename,
    Body: stream,
  };

  return s3.upload(params).promise();
};

// Downloads a file from S3
export const DownloadFromS3 = (Key: string) => {
  const params: GetObjectRequest = {
    Key,
    Bucket,
  };

  return s3.getObject(params).createReadStream();
};
