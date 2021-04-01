import { model, Schema } from "mongoose";

const schema = Schema({
  name: String,
  description: String,
  price: Number,
});

export default model("Menu", schema);
