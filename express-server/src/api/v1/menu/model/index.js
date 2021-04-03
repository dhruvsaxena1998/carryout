import { model, Schema } from "mongoose";

const ItemRef = [
  {
    type: Schema.Types.ObjectId,
    ref: "Item",
  },
];

const schema = Schema({
  name: String,
  description: String,
  price: Number,
  default: ItemRef,
  optional: ItemRef,
});

export default model("Menu", schema);
