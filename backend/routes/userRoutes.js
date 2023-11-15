import express from 'express';
import { authUser, registerUser, logoutUser, getAllCourses, getCourse, enrollCourse, getAllEnrollCourses, markAsComplete, getEnrollCourse} from '../controllers/userController.js';
import { protectUser } from '../middleware/authMiddleware.js';


const router = express.Router();

router.post('/',registerUser);

router.post('/auth',authUser);

router.post('/logout',logoutUser);

router.get('/courses',getAllCourses);

router.get('/courses/:courseId', getCourse)

router.post('/enroll-course',protectUser,enrollCourse)

router.get('/enroll-courses',protectUser, getAllEnrollCourses)

router.post('/course-complete',protectUser, markAsComplete)

router.get('/enroll-specific-course/:courseId',protectUser, getEnrollCourse)




export default router;