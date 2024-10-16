import { User } from './user.model';
import { IUser } from './user.interface';
import bcrypt from 'bcryptjs';

export const registerUserService = async (userData: IUser) => {
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const user = new User({ ...userData, password: hashedPassword });
  return await user.save();
};

export const loginUserService = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('User not found');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Invalid password');
  }

  return user;
};

export const getUserProfileService = async (userId: string) => {
  return await User.findById(userId).select('-password');
};

export const updateUserProfileService = async (userId: string, updateData: Partial<IUser>) => {
  const updatedData = { ...updateData };

  if (updateData.password) {
    updatedData.password = await bcrypt.hash(updateData.password, 10);
  }

  return await User.findByIdAndUpdate(userId, updatedData, { new: true }).select('-password');
};
