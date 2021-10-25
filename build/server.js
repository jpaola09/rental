"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const compression_1 = __importDefault(require("compression"));
//import routes
const suitsRoutes_1 = __importDefault(require("./routes/suitsRoutes"));
const usersRoutes_1 = __importDefault(require("./routes/usersRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set("port", process.env.PORT || 4000);
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
        this.app.use((0, compression_1.default)());
    }
    routes() {
        this.app.use("/api/suits", suitsRoutes_1.default);
        this.app.use("/api/users", usersRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get("port"), () => {
            console.log("Server is listening on port ", this.app.get("port"));
        });
    }
}
exports.Server = Server;
