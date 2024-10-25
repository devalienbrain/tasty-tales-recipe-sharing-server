// import express from "express";
// import { UserControllers } from "./user.controller";

// const router = express.Router();

// router.get("/", UserControllers.getAllUsers);

// export const UserRoutes = router;

import express from "express";
import { UserControllers } from "./user.controller";

const router = express.Router();

router.get("/", UserControllers.getAllUsers);
router.patch("/:id", UserControllers.updateUser); // New route to update user profile
router.post("/block/:id", UserControllers.blockUser);

export const UserRoutes = router;
