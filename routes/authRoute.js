import express from 'express';
import { login, logout, register, sendOtp, verifyEmail } from '../controllers/authController.js';
import userAuth from '../middleware/userAuth.js';


const authRouter=express.Router();
authRouter.post('/register',register);
authRouter.post('/login',login);
authRouter.post('/logout',logout);
authRouter.post('/sendOtp',userAuth,sendOtp);
authRouter.post('/verifyEmail',userAuth,verifyEmail);



export default authRouter; 