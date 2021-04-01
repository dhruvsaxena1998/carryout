const { getSlug } = require("../../../utils/common");
const ItemModel = require("./model");

module.exports = {
  find: async (req, res) => {
    const entities = await ItemModel.find();

    res.status(200).send(entities);
  },
  create: async (req, res) => {
    const body = {
      ...req.body,
      slug: getSlug(req.body.name),
    };
    try {
      const entity = await ItemModel.create(body);
      res.send(entity);
    } catch (e) {
      if (e.message.includes("duplicate")) {
        res.status(400).send({
          message: e.message,
          error: e,
        });
      }
    }
  },
  update: async (req, res) => {
    const { id } = req.params;

    // delete slug if provided
    delete req.body.slug;
    try {
      const entity = await ItemModel.findByIdAndUpdate(id, req.body.slug, {
        new: true,
      });
      res.send(entity);
    } catch (e) {}
  },
  delete: async (req, res) => {
    const { id } = req.params;

    try {
      const entity = await ItemModel.findByIdAndDelete(id);
      res.status(200).send(entity);
    } catch (e) {}
  },
};
