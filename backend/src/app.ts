import express, { Express } from "express";
import { Server } from "socket.io";
import mongoose from "mongoose";
import routes from "./routes";
import cors from "cors";
import { ServerToClientEvents, ClientToServerEvents, InterServerEvents, SocketData } from "./types/socket";
import { createServer } from "http";

const app: Express = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(routes);
app.use(cors());

const httpServer = createServer(app);

const PORT: number = 5000;

const uri: string = "mongodb://127.0.0.1:27017/chatroom";

const io = new Server<
    ClientToServerEvents,
    ServerToClientEvents,
    InterServerEvents,
    SocketData
>(httpServer, {
    cors: {
        origin: ["http://localhost:3000"]
    }
});

io.on("connection", socket => {
    console.log(socket.id);
});

httpServer.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

mongoose
    .connect(uri)
    .catch(error => {
        throw error;
    });