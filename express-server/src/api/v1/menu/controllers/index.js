import Menu from "../model";

const find = async (req, res) => {
  const { populate } = req.query;

  let entities;
  if (!populate) {
    entities = await Menu.find();
  } else {
    entities = await Menu.find().populate("default").populate("optional");
  }
  res.status(200).send(entities);
};

const create = async (req, res) => {
  const menu = await Menu.create(req.body);
  res.status(200).send(menu);
};

export default {
  find,
  create,
};
