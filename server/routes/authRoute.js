import express from 'express';
import { login, logout, register, sendOtp, verifyEmail, sendResetOtp, resetPassword } from '../controllers/authController.js';
import userAuth from '../middleware/userAuth.js';


const authRouter=express.Router();
authRouter.post('/register',register);
authRouter.post('/login',login);
authRouter.post('/logout',logout);
authRouter.post('/sendOtp',userAuth,sendOtp);
authRouter.post('/verifyEmail',userAuth,verifyEmail);
authRouter.post('/sendResetOtp',sendResetOtp);
authRouter.post('/resetPassword',resetPassword);




export default authRouter; 