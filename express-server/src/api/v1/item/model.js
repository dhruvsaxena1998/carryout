const { model, Schema } = require("mongoose");

const schema = Schema({
  name: String,
  price: Number,
  slug: { type: String, unique: true },
  max: { type: Number, default: 2 },
  default: { type: Number, default: 1 },
});

module.exports = model("Item", schema);
