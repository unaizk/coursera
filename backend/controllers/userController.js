import asyncHandler from 'express-async-handler'

const authUser = asyncHandler(async(req,res)=>{
    res.status(200).send({message : 'User has authorized'})
});

const registerUser = asyncHandler(async(req,res)=>{
    res.status(200).send({message : 'User has created'})
});

const logoutUser = asyncHandler(async(req,res)=>{
    res.status(200).send({message : 'User has logout'})
});


export {
    authUser,
    registerUser,
    logoutUser
}