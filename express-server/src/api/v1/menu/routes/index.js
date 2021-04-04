import path from "path";
import { randomAlphaNumeric } from "@utils/common";

import { Router as _Router } from "express";
const Router = _Router();

import Controller from "../controllers";

// Middlewares
import multer from "multer";
import Validator from "../services/validator";

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "public/uploads/");
  },
  filename: (req, file, callback) => {
    try {
      const ext = path.extname(file.originalname); // '.png'
      const mid = randomAlphaNumeric(8);
      const [filename] = file.originalname.replace(/\s/g, "").split(ext);
      callback(null, `${filename.toLowerCase()}-${mid}${ext}`);
    } catch (err) {
      callback(err, null);
    }
  },
});

const upload = multer({ storage });

/**
 * @route /
 * @method GET
 * @description Get all Menu
 */
Router.get("/", Controller.find);

/**
 * @route /
 * @method POST
 * @description Create a menu
 */
Router.post("/", [Validator.create], Controller.create);

/**
 * @route /:id/image
 * @method POST
 * @description Add Image to menu
 */
Router.post("/:id/image", [Validator.exists, upload.single("image")], Controller.image);

export default Router;
