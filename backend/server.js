import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
dotenv.config(); // LOAD ENV VARIABLES


const port = process.env.PORT || 5000;

connectDB() //calling mongoDB connected function that is imported from config folder

const app = express();

app.use('/api/users',userRoutes)

app.get('/',(req,res)=>{
    res.send('Server is ready')
})

app.use(notFound);

app.use(errorHandler)

app.listen(port,()=>{
    console.log(`Port is running on ${port}`);
})