import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { connectDB } from './ConnectDB.js';
import cors from 'cors';
import userRoutes from './routes/user.routes.js';
import cookieParser from "cookie-parser";

const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());



connectDB();


const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.use('/api/user', userRoutes);


app.listen(PORT,() => {
    console.log(`Server Started at http://localhost:${PORT}`);
})