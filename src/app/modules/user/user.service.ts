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

export const UserServices = {
  createUserIntoDB,
  getAllUsers,
};
