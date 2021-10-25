"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-ignore
const mongoose_1 = require("mongoose");
const Suitschema = new mongoose_1.Schema({
    nameSuit: { type: String, require: true, unique: true, lowercase: true },
    cost: { type: String, require: true },
    content: { type: String, require: true },
    dateAt: { type: Date, default: Date.now },
}, {
    versionKey: false, // You should be aware of the outcome after set to false
});
exports.default = (0, mongoose_1.model)("Suits", Suitschema);
