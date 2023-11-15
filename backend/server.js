import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
dotenv.config(); // LOAD ENV VARIABLES


const port = process.env.PORT || 5000;

connectDB() //calling mongoDB connected function that is imported from config folder

const app = express();

// Middleware to parse incoming JSON data in the request body.
// This allows us to access the JSON data in route handlers using req.body.
app.use(express.json());

// Middleware to parse incoming URL-encoded data in the request body.
// The extended option set to true allows handling rich objects and arrays in the URL-encoded data.
// This middleware makes the parsed data available in route handlers using req.body.
app.use(express.urlencoded({extended:true}))

app.use('/api/users',userRoutes)

app.get('/',(req,res)=>{
    res.send('Server is ready')
})

// Handle cases when no route matches the request with the 'notFound' middleware
app.use(notFound);

// Handle errors and provide consistent responses with the 'errorHandler' middleware
app.use(errorHandler)

app.listen(port,()=>{
    console.log(`Port is running on ${port}`);
})