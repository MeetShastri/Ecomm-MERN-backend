import express from 'express';
const router = express.Router();

import { userSignUp } from '../controller/userSignUp.js'    
import { userSignIn } from '../controller/userSignIn.js';
import { userDetails } from '../controller/userDetails.js';
import { authToken } from '../middleware/authToken.js';
import { userLogout } from '../controller/userLogout.js';
import { getAllUsers } from '../controller/allUsers.js';
import { updateUser } from '../controller/updateUser.js';
router.post('/signup', userSignUp)
router.post('/signin', userSignIn)
router.get('/getuser', authToken, userDetails)
router.get("/userlogout", userLogout)

router.get('/allusers', authToken, getAllUsers)
router.post('/updateuser', authToken, updateUser)
export default router   