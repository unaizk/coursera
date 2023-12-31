import asyncHandler from 'express-async-handler'
import User from '../model/userModel.js';
import generateToken from '../utils/generateToken.js';
import { sampleCourses } from '../courses/sampleCourse.js';
import { enrollStudentInCourse } from '../helpers/userHelper.js';
import { enrolledSpecificCourse } from '../helpers/userHelper.js';


// User Authentication
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


//User registraion
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


//User logout 
const logoutUser = asyncHandler(async(req,res)=>{

    res.cookie('jwt','',{
        httpOnly : true,
        expires : new Date(0)
    })
    res.status(200).send({message : 'User logged out'})
});


//Get all the courses
const getAllCourses = asyncHandler(async(req,res)=>{

    
    const coursesInfo = sampleCourses.map(course => ({
        id: course.id,
        name: course.name,
        instructor: course.instructor,
        thumbnail : course.thumbnail,
      }));
    
      res.json(coursesInfo);
})


//Get a specific course
const getCourse = asyncHandler(async(req,res)=>{

    const courseId = parseInt(req.params.courseId);
    const course = sampleCourses.find(course => course.id === courseId);

    if (!course) {
        res.status(404)
        throw new Error('Course not found')
    }

     res.json(course);
})


//Enrolling a course
const enrollCourse = asyncHandler(async (req, res) => {
    const courseId = parseInt(req.body.courseId);
    console.log(courseId,'courseId');
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
            await enrollStudentInCourse(course, userId);

            // Send a response with the updated students array
                res.status(201).json({message : 'Enrolled succussfully'});

        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


//Getting all enrolled course
const getAllEnrollCourses = asyncHandler(async (req, res) => {
    const userId = req.user._id;

    // Iterate over all courses
    const enrolledCourses = sampleCourses.filter((course) => {
        // Check if the course has a students array and if the user is enrolled
        return course.students && course.students.some((student) => student.userId?.equals(userId));
    });


    if (!enrolledCourses.length) {
        throw new Error('You have not enrolled in any courses');
    }

    const filterEnrolledCourses =  enrolledCourses.map((course) =>({
                id : course.id,
                name :course.name,
                instructor : course.instructor,
                description : course.description,
                thumbnail : course.thumbnail,
                duration : course.duration,
                enrollmentStatus : course.enrollmentStatus,
            
    }))
    if(!filterEnrolledCourses){
        throw new Error('Something went wrong')
    }
    res.status(200).json(filterEnrolledCourses);
});



//Mark as completed course
const markAsComplete = asyncHandler(async (req, res) => {
    const courseId = parseInt(req.body.courseId);
  
    const userId = req.user._id;

    const course = await enrolledSpecificCourse(courseId,userId)
    if(course){
          // Toggle the complete field for the entire course
          course.complete = !course.complete;
        
         res.status(200).json(course.complete);
    }  
    
});


//Getting a specific enrolled course
const getEnrollCourse = asyncHandler(async(req,res)=>{
    const courseId = parseInt(req.params.courseId);
    const userId = req.user._id;

    const course = await enrolledSpecificCourse(courseId,userId)
    
    if(course){
        res.status(200).json(course)
    }
    
})





export {
    authUser,
    registerUser,
    logoutUser,
    getAllCourses,
    getCourse,
    enrollCourse,
    getAllEnrollCourses,
    markAsComplete,
    getEnrollCourse
}