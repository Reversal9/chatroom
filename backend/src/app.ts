import express, { Express } from "express";
import mongoose from "mongoose";
import routes from "./routes";

const app: Express = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(routes);

const PORT: string | number = process.env.PORT || 5000;

const uri: string = `http://localhost/${PORT}`;

mongoose
    .connect(uri)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch(error => {
        throw error;
    });