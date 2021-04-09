import { validationResult } from "express-validator";
import { generateSlug } from "@utils/common";
import ErrorGenerator from "@functions/error";
import Item from "../model";

const find = async (req, res) => {
  try {
    const entities = await Item.find();
    res.status(200).send(entities);
  } catch (err) {
    res.status(500).send({
      message: err.message,
      instance: err,
    });
  }
};

const create = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      ErrorGenerator({ code: 400, message: errors.array() });
    }

    const body = {
      ...req.body,
      slug: generateSlug(req.body.name),
      currentQty: req.body.defaultQty
    };

    const entity = await Item.create(body);
    res.status(200).send(entity);
  } catch (err) {
    res.status(err.code || 500).send({
      message: err.message,
      instance: err,
    });
  }
};

const update = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      ErrorGenerator({ code: 400, message: errors.array() });
    }

    const { id } = req.params;
    // delete slug if provided
    delete req.body.slug;

    const entity = await Item.findByIdAndUpdate(id, req.body, {
      new: true, // return updated document
    });

    if (!entity) {
      ErrorGenerator({ code: 404, message: "Item not found!" });
    }
    res.status(200).send(entity);
  } catch (err) {
    res.status(err.code || 500).send({
      message: err.message,
      instance: err,
    });
  }
};

const del = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      ErrorGenerator({ code: 400, message: errors.array() });
    }

    const { id } = req.params;
    const entity = await Item.findByIdAndDelete(id);
    if (!entity) {
      ErrorGenerator({ code: 404, message: "No such item exists" });
    }

    res.status(200).send(entity);
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
  update,
  delete: del,
};
