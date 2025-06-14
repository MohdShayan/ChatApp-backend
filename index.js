import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './ConnectDB.js';
dotenv.config();


const app = express();

connectDB();


const PORT = process.env.PORT || 3000;
app.get('/api', (req, res) => {
    res.send('Hello, World!');
});


app.listen(PORT,() => {
    console.log(`Server Started at http://localhost:${PORT}`);
})