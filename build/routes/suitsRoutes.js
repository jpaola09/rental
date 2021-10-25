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
const Suits_1 = __importDefault(require("../models/Suits"));
class suitsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    getSuits(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const suits = yield Suits_1.default.find();
            res.json({ Suits: suits });
        });
    }
    postSuits(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nameSuit, cost, content } = req.body;
            const newSuits = new Suits_1.default({ nameSuit, cost, content });
            yield newSuits.save();
            res.json({ status: res.status, data: newSuits });
        });
    }
    putSuits(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nameSuit } = req.body;
            const suits = yield Suits_1.default.findOneAndUpdate({ nameSuit }, req.body);
            res.json({ status: res.status, data: suits });
        });
    }
    deleteSuits(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nameSuit } = req.body;
            const suits = yield Suits_1.default.findOneAndRemove({ nameSuit });
            res.json({ status: res.status, data: suits });
        });
    }
    routes() {
        this.router.get("/", this.getSuits);
        this.router.post("/", this.postSuits);
        this.router.put("/", this.putSuits);
        this.router.delete("/", this.deleteSuits);
    }
}
const suitsRouter = new suitsRoutes();
exports.default = suitsRouter.router;
