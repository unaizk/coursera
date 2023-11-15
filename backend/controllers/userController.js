import asyncHandler from 'express-async-handler'
import User from '../model/userModel.js';
import generateToken from '../utils/generateToken.js';
import { sampleCourses } from '../courses/sampleCourse.js';

const authUser = asyncHandler(async(req,res)=>{
    
    const { email, password} = req.body;

    const user = await User.findOne({email});

    if(user && (await user.matchPassword(password))){
        generateToken(res,user._id)
        res.status(200).json({
            _id : user._id,
            name : user.name,
            email : user.email
        })
    }else{
        res.status(400);
        throw new Error('Invalid email or password')
    }
});

const registerUser = asyncHandler(async(req,res)=>{
    const { name, email, password} = req.body;

    const userExist = await User.findOne({email})

    if(userExist){
        res.status(400)
        throw new Error('User already exist')
    }

    const user = await User.create({
        name : name,
        email : email,
        password : password
    })

    if(user){
        generateToken(res,user._id)
        res.status(201).json({
            _id : user._id,
            name : user.name,
            email : user.email
        })
    }else{
        res.status(400);
        throw new Error('Invalid user data')
    }
   
});

const logoutUser = asyncHandler(async(req,res)=>{

    res.cookie('jwt','',{
        httpOnly : true,
        expires : new Date(0)
    })
    res.status(200).send({message : 'User logged out'})
});

const getAllCourses = asyncHandler(async(req,res)=>{

    const coursesInfo = sampleCourses.map(course => ({
        id: course.id,
        name: course.name,
        instructor: course.instructor,
        thumbnail : course.thumbnail
        // Add more relevant details as needed
      }));
    
      res.json(coursesInfo);
})




export {
    authUser,
    registerUser,
    logoutUser,
    getAllCourses
}