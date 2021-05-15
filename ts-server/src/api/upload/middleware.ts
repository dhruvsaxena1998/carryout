import Joi from "joi";
import path from "path";
import multer from "multer";

// Types
import { Request, Response, NextFunction } from "express";

// Utils
import { randomAlphaNumeric } from "../../utils/common";

export const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "uploads/");
  },
  filename: (req, file, callback) => {
    try {
      const ext = path.extname(file.originalname);
      const [filename] = file.originalname.replace(/\s/g, "").split(ext);

      callback(
        null,
        `${filename.toLowerCase()}_${randomAlphaNumeric(8)}${ext}`
      );
    } catch (err) {
      callback(err, "");
      console.log({ message: err.message });
    }
  },
});

export const upload = multer({ storage });

// Validator
export const GetMediaValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = Joi.object({
    key: Joi.string().required(),
  });

  const { error } = schema.validate(req.params);
  if (error) {
    return res.status(400).send(error.details[0]);
  }

  next();
};
