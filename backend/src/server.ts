import express from "express";
import * as dotenv from 'dotenv';
import connect from './config/db';
import userRoutes from "./routes/user.routes";
import { errorHandler, notFound } from "./middlewares/error.middleware";

dotenv.config();

connect();
const app = express();

app.use(express.json());

app.use("/api", userRoutes);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => `Api ⚡ on ${PORT}`)