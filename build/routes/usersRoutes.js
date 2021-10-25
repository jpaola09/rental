"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Users_1 = __importDefault(require("../models/Users"));
class usersRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield Users_1.default.find();
            res.json({ Users: users });
        });
    }
    postUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, lastname, address } = req.body;
            const newUsers = new Users_1.default({ name, lastname, address });
            yield newUsers.save();
            res.json({ status: res.status, data: newUsers });
        });
    }
    putUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name } = req.body;
            const users = yield Users_1.default.findOneAndUpdate({ name }, req.body);
            res.json({ status: res.status, data: users });
        });
    }
    deleteUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name } = req.body;
            const users = yield Users_1.default.findOneAndRemove({ name });
            res.json({ status: res.status, data: users });
        });
    }
    routes() {
        this.router.get("/", this.getUsers);
        this.router.post("/", this.postUsers);
        this.router.put("/", this.putUsers);
        this.router.delete("/", this.deleteUsers);
    }
}
const usersRouter = new usersRoutes();
exports.default = usersRouter.router;
