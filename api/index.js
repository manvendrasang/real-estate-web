import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';


const app = express();

app.listen(3000, () => {
    console.log('API server is running on PORT 3000');
});

dotenv.config();
mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
});