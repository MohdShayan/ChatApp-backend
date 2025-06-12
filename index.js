import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './ConnectDB';
dotenv.config();

const app = express();
connectDB();

const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('Hello, World!');
});


app.listen(PORT,() => {
    console.log(`Server Started at http://localhost:${PORT}`);
})