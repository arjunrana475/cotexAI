import dotenv from 'dotenv';
import express from 'express'
import connectDB from './config/db.js';
dotenv.config();

const port = process.env.PORT;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Hello from agent." });
 })

app.listen(port, () => {
    console.log("agent server started at port " + port);
    connectDB();
})