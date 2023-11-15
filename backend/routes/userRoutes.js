import express from 'express';
import { authUser, registerUser, logoutUser, getAllCourses, getCourse} from '../controllers/userController.js';
import { protectUser } from '../middleware/authMiddleware.js';


const router = express.Router();

router.post('/',registerUser);

router.post('/auth',authUser);

router.post('/logout',logoutUser);

router.get('/courses',getAllCourses);

router.get('/courses/:id', getCourse)



export default router;