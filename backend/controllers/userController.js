import asyncHandler from 'express-async-handler'
import User from '../model/userModel.js';
import generateToken from '../utils/generateToken.js';
import { sampleCourses } from '../courses/sampleCourse.js';
import { enrollStudentInCourse } from '../helpers/userHelper.js';

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
      }));
    
      res.json(coursesInfo);
})

const getCourse = asyncHandler(async(req,res)=>{
    const courseId = parseInt(req.params.courseId);
    const course = sampleCourses.find(course => course.id === courseId);

    if (!course) {
        res.status(404)
        throw new Error('Course not found')
    }

     res.json({
        name : course.name,
        instructor : course.instructor,
        description : course.description,
        thumbnail : course.thumbnail,
        duration : course.duration
     });
})

const enrollCourse = asyncHandler(async (req, res) => {
    const courseId = parseInt(req.params.courseId);
    const userId = req.user._id;
    try {
        const course = sampleCourses.find(course => course.id === courseId);

        if (!course) {
            res.status(404);
            throw new Error('Course not found');
        }

        const isEnrolled = course.students.find((student)=> {
            return student.userId.equals(userId)
        })

        if(isEnrolled){
            throw new Error('User already enrolled')
        }else{
            // Call the function to enroll the student in the course
            const enrolledCourse = await enrollStudentInCourse(course, userId);

            // Send a response with the updated students array
                res.json({
                    message: 'Enrollment successful',
                    courseId,
                    userId,
                    students: enrolledCourse.students,
                });

        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});





export {
    authUser,
    registerUser,
    logoutUser,
    getAllCourses,
    getCourse,
    enrollCourse
}