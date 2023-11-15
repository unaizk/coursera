import asyncHandler from 'express-async-handler'
import User from '../model/userModel.js';

const authUser = asyncHandler(async(req,res)=>{
    
    res.status(200).send({message : 'User has authorized'})
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
    res.status(200).send({message : 'User has logout'})
});


export {
    authUser,
    registerUser,
    logoutUser
}