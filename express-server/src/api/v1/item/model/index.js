import { model, Schema } from "mongoose";

const schema = Schema({
  name: String,
  price: Number,
  slug: { type: String, unique: true },
  max: { type: Number, default: 2 },
  default: { type: Number, default: 1 },
  current: { type: Number, default: 1 },
});

export default model("Item", schema);
