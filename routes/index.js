import express from 'express';
const router = express.Router();

import { userSignUp } from '../controller/user/userSignUp.js';    
import { userSignIn } from '../controller/user/userSignIn.js';
import { userDetails } from '../controller/user/userDetails.js';
import { authToken } from '../middleware/authToken.js';
import { userLogout } from '../controller/user/userLogout.js';
import { getAllUsers } from '../controller/user/allUsers.js';
import { updateUser } from '../controller/user/updateUser.js';
import { uploadProduct } from '../controller/product/uploadProduct.js';
import { getProducts } from '../controller/product/getProducts.js';
import { updateProduct } from '../controller/product/updateProduct.js';
import { getCategoryProduct } from '../controller/product/getCategoryProduct.js';
import { getCategoryWiseProduct } from '../controller/product/getCategoryWiseProduct.js';
router.post('/signup', userSignUp)
router.post('/signin', userSignIn)
router.get('/getuser', authToken, userDetails)
router.get("/userlogout", userLogout)

router.get('/allusers', authToken, getAllUsers)
router.post('/updateuser', authToken, updateUser)

router.post('/uploadproduct', authToken, uploadProduct)
router.get('/getproducts', getProducts)
router.post('/updateproduct', authToken, updateProduct)

router.get('/getcategoryproduct', getCategoryProduct)
router.get('/getcategorywiseproduct', getCategoryWiseProduct)
export default router