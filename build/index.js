"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
require("./config/mongoose");
const server = new server_1.Server();
server.start();
