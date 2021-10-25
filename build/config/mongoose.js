"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-ignore
const mongoose_1 = __importDefault(require("mongoose"));
const MONGO_URI = 'mongodb+srv://root:1994@rental.vjmvn.mongodb.net/rental?retryWrites=true&w=majority';
mongoose_1.default.set('useFindAndModify', false);
mongoose_1.default.connect(MONGO_URI || process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});
