import { TUser } from "./user.interface";
import { User } from "./user.model";

const createUserIntoDB = async (userData: TUser) => {
  // create a user
  const newUser = await User.create(userData);
  return newUser;
};
const getAllUsers = async (): Promise<TUser[]> => {
  return await User.find();
};

const blockUserById = async (id: string) => {
  const user = await User.findById(id);
  if (!user) throw new Error("User not found");
  user.isBlocked = true;
  await user.save();
  return user;
};

export const UserServices = {
  createUserIntoDB,
  getAllUsers,
  blockUserById,
};
