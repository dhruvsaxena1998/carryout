const MenuModel = require("./model");

module.exports = {
  find: async (req, res) => {
    const entities = await MenuModel.find();

    res.status(200).send(entities);
  },
};
