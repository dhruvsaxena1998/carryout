import { model, Schema } from "mongoose";

const schema = Schema({
  name: String,
  price: Number,
  slug: { type: String, unique: true },
  maxQty: { type: Number, default: 2 },
  defaultQty: { type: Number, default: 1 },
  currentQty: { type: Number, default: 1 },
});

export default model("Item", schema);
