import { model, Schema } from "mongoose";

const schema = Schema({
  phone: { type: Number, unique: true },
  email: { type: String, unique: true },
  password: String,
  blocked: { type: Boolean, default: false },
  resetPasswordToken: String,
});

export default model("User", schema);
