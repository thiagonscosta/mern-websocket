import express from "express";
import * as dotenv from 'dotenv';
import connect from './config/db';
import { routes } from "./routes";
import { errorHandler, notFound } from "./middlewares/error.middleware";

dotenv.config();

connect();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("API Is Running")
})

app.use("/api/user", routes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => `Api running on ${PORT}`)