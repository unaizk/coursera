import asyncHandler from 'express-async-handler'

const authUser = asyncHandler(async(req,res)=>{
    res.status(401);
    throw new Error('Something wnet wrong')
    res.status(200).send({message : 'User has created'})
});

export {
    authUser
}