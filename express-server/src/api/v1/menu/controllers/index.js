import { validationResult } from "express-validator";
import ErrorGenerator from "@functions/error";

import Menu from "../model";

const find = async (req, res) => {
  const { populate } = req.query;

  let entities;
  if (!populate) {
    entities = await Menu.find();
  } else {
    entities = await Menu.find().populate("items").populate("optional");
  }
  res.status(200).send(entities);
};

const create = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      ErrorGenerator({ code: 400, message: errors.array() });
    }

    const menu = await Menu.create(req.body);
    res.status(200).send(menu);
  } catch (err) {
    res.status(err.code || 500).send({
      message: err.message,
      instance: err,
    });
  }
};

const image = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      ErrorGenerator({ code: 400, message: errors.array() });
    }

    const { fieldname, encoding, mimetype, filename, size } = req.file;
    const image = {
      fieldname,
      encoding,
      mimetype,
      filename,
      size,
      path: "/uploads",
      url: `/uploads/${filename}`,
    };

    const menu = await Menu.findByIdAndUpdate(
      req.params.id,
      { image },
      { new: true }
    );

    res.status(201).send(menu);
  } catch (err) {
    res.status(err.code || 500).send({
      message: err.message,
      instance: err,
    });
  }
};

export default {
  find,
  create,
  image,
};
