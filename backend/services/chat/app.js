import dotenv from 'dotenv'
import connectDB from './config/db.js';
import cookieParser from "cookie-parser";
import router from './routes/chat.route.js';
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