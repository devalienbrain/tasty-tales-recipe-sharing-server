import { Router } from "express";
import { confirmationController } from "./payment.controller";

const router = Router();

// POST route for payment confirmation
router.post("/", confirmationController);

export const paymentRoutes = router;
