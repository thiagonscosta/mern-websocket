import express from "express";
import * as dotenv from 'dotenv';
import connect from './config/db';

dotenv.config();

connect();

const app = express();

app.get('/', (req, res) => {
    res.send("API Is Running")
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => `Api running on ${PORT}`)