//@ts-ignore
import { Schema, model } from "mongoose";

const UsersSchema = new Schema(
  {
    name: { type: String, require: true, unique: true, lowercase: true },
    lastname: { type: String, require: true },
    address: { type: String, require: true },
    dateAt: { type: Date, default: Date.now },
  },
  {
    versionKey: false, // You should be aware of the outcome after set to false
  }
);

export default model("Users", UsersSchema);