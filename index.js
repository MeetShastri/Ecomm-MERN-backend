import express from 'express';
const app = express();
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import router from './routes/index.js';
import cookieParser from 'cookie-parser';
dotenv.config();
app.use(cors(
    {
        origin: 'http://localhost:3000',
        credentials: true
    }
));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', router);
app.use(cookieParser());
app.use(express.json({ limit: '500mb' }));
app.use(express.urlencoded({ limit: '500mb', extended: true }));


const PORT = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;
connectDB().then(() => {  
    app.listen(PORT, () => {
        console.log("MongoDB Connected");
        console.log(`Server running on port: ${PORT}`);
    })
})