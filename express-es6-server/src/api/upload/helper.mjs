import multer from "multer";
import path from "path";

import { randomAlphaNumeric } from "../../utils/common.mjs";

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
      callback(err, null);
    }
  },
});

export const Upload = multer({ storage });
