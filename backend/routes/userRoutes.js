import express from 'express';
import { authUser, registerUser, logoutUser, getAllCourses} from '../controllers/userController.js';
import { protectUser } from '../middleware/authMiddleware.js';


const router = express.Router();

router.post('/',registerUser);

router.post('/auth',authUser);

router.post('/logout',logoutUser);

router.get('/courses',getAllCourses)



export default router;