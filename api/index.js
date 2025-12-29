import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

const app = express();
app.use(express.json());

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

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

// app.get("/", (req, res) => {
//     res.send("Welcome to the User API");
// });