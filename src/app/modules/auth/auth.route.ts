import express from "express";
import { AuthValidation } from "./auth.validation";
import { AuthControllers } from "./auth.controller";
import { UserControllers } from "../user/user.controller";
import validateRequest from "../../middlewares/validateRequest";

const router = express.Router();

router.post("/signup", UserControllers.createUser);

router.post(
  "/login",
  validateRequest(AuthValidation.loginValidationSchema),
  AuthControllers.loginUser
);

router.post(
  "/refresh-token",
  validateRequest(AuthValidation.refreshTokenValidationSchema),
  AuthControllers.refreshToken
);

export const AuthRoutes = router;
