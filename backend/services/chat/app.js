import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import router from './routes/chat.route.js';
import express from 'express'
dotenv.config();

const port = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/", router);



app.listen(port, () => {
    console.log("chat server started at port " + port);
    connectDB();
})