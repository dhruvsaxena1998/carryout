const { model, Schema } = require("mongoose");

const schema = Schema({
  name: String,
  description: String,
  price: Number,
});

module.exports = model("Menu", schema);
