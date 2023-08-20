"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var socket_io_1 = require("socket.io");
var mongoose_1 = __importDefault(require("mongoose"));
var routes_1 = __importDefault(require("./routes"));
var cors_1 = __importDefault(require("cors"));
var http_1 = require("http");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.use(routes_1.default);
app.use((0, cors_1.default)());
var httpServer = (0, http_1.createServer)(app);
var PORT = 5000;
var uri = "mongodb://127.0.0.1:27017/chatroom";
var io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: ["http://localhost:3000"]
    }
});
io.on("connection", function (socket) {
    console.log(socket.id);
});
httpServer.listen(PORT, function () {
    console.log("Server running on http://localhost:".concat(PORT));
});
mongoose_1.default
    .connect(uri)
    .catch(function (error) {
    throw error;
});
