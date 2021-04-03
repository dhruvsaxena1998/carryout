import { generateSlug } from "@utils/common";
import Item from "../model";

export default {
  find: async (req, res) => {
    try {
      const entities = await Item.find();
      res.status(200).send(entities);
    } catch (e) {}
  },
  create: async (req, res) => {
    const body = {
      ...req.body,
      slug: generateSlug(req.body.name),
    };
    try {
      const entity = await Item.create(body);
      res.status(200).send(entity);
    } catch (e) {}
  },
  update: async (req, res) => {
    const { id } = req.params;

    // delete slug if provided
    delete req.body.slug;
    try {
      const entity = await Item.findByIdAndUpdate(id, req.body.slug, {
        new: true,
      });
      res.status(200).send(entity);
    } catch (e) {}
  },
  delete: async (req, res) => {
    const { id } = req.params;

    try {
      const entity = await Item.findByIdAndDelete(id);
      res.status(200).send(entity);
    } catch (e) {}
  },
};
