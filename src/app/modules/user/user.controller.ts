import { Request, Response } from 'express';
import { registerUserService, loginUserService, getUserProfileService, updateUserProfileService } from './user.service';
import { generateToken } from '../utils/jwtHelper';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const newUser = await registerUserService(req.body);
    return res.status(201).json({ user: newUser, token: generateToken(newUser._id) });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const user = await loginUserService(req.body.email, req.body.password);
    return res.status(200).json({ user, token: generateToken(user._id) });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const getUserProfile = async (req: Request, res: Response) => {
  try {
    const userProfile = await getUserProfileService(req.user._id);
    return res.status(200).json(userProfile);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateUserProfile = async (req: Request, res: Response) => {
  try {
    const updatedUser = await updateUserProfileService(req.user._id, req.body);
    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
