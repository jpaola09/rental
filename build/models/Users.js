"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-ignore
const mongoose_1 = require("mongoose");
const UsersSchema = new mongoose_1.Schema({
    name: { type: String, require: true, unique: true, lowercase: true },
    lastname: { type: String, require: true },
    address: { type: String, require: true },
    dateAt: { type: Date, default: Date.now },
}, {
    versionKey: false, // You should be aware of the outcome after set to false
});
exports.default = (0, mongoose_1.model)("Users", UsersSchema);
