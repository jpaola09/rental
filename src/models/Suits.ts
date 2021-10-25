//@ts-ignore
import { Schema, model } from "mongoose";

const Suitschema = new Schema(
  {
    nameSuit: { type: String, require: true, unique: true, lowercase: true },
    cost: { type: String, require: true },
    content: { type: String, require: true },
    dateAt: { type: Date, default: Date.now },
  },
  {
    versionKey: false, // You should be aware of the outcome after set to false
  }
);

export default model("Suits", Suitschema);