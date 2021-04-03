import Menu from "../model";

export default {
  find: async (req, res) => {
    const entities = await Menu.find();

    res.status(200).send(entities);
  },
};
