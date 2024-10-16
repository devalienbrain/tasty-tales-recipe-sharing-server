import express from 'express';
import { registerUser, loginUser, getUserProfile, updateUserProfile } from './user.controller';
import { validateRequest } from '../utils/zodMiddleware';
import { userValidation } from './user.validation';
import { authMiddleware } from '../utils/authMiddleware';

const router = express.Router();

router.post('/register', validateRequest(userValidation.registerUser), registerUser);
router.post('/login', validateRequest(userValidation.loginUser), loginUser);
router.get('/profile', authMiddleware, getUserProfile);
router.put('/profile', authMiddleware, validateRequest(userValidation.updateProfile), updateUserProfile);

export default router;
