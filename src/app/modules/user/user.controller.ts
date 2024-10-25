// import { NextFunction, Request, Response } from "express";
// import { UserServices } from "./user.service";

// const createUser = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const userData = req.body;
//     console.log(req.body);
//     // const zodParsedData = studentValidationSchema.parse(studentData);

//     const result = await UserServices.createUserIntoDB(userData);

//     res.status(200).json({
//       statusCode: 200,
//       success: true,
//       message: "User registered succesfully",
//       data: result,
//     });
//   } catch (err) {
//     next(err);
//   }
// };

// export const getAllUsers = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const Users = await UserServices.getAllUsers();
//     if (Users.length === 0) {
//       return res.status(404).json({
//         success: false,
//         statusCode: 404,
//         message: "No Data Found",
//         data: [],
//       });
//     }
//     res.status(200).json({
//       success: true,
//       statusCode: 200,
//       message: "Users retrieved successfully",
//       data: Users,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// export const blockUser = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const userId = req.params.id;
//     const user = await UserServices.blockUserById(userId);

//     res.status(200).json({
//       success: true,
//       message: "User blocked successfully",
//       data: user,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// export const UserControllers = {
//   createUser,
//   getAllUsers,
//   blockUser,
// };

import { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.service";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userData = req.body;
    const result = await UserServices.createUserIntoDB(userData);

    res.status(200).json({
      statusCode: 200,
      success: true,
      message: "User registered successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await UserServices.getAllUsers();
    if (users.length === 0) {
      return res.status(404).json({
        success: false,
        statusCode: 404,
        message: "No Data Found",
        data: [],
      });
    }
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Users retrieved successfully",
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

const blockUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.params.id;
    const user = await UserServices.blockUserById(userId);

    res.status(200).json({
      success: true,
      message: "User blocked successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

// Controller to update user profile
const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.params.id;
    const updateData = req.body;

    const updatedUser = await UserServices.updateUserById(userId, updateData);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "User profile updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    next(error);
  }
};

export const UserControllers = {
  createUser,
  getAllUsers,
  blockUser,
  updateUser, // Export new controller function
};
