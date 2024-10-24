import { Router } from "express";
import { paymentController } from "./payment.controller";
// import { paymentController } from "./payment.controller";

const router = Router();

// POST route for payment confirmation
router.post("/", paymentController.confirmationController);

export const paymentRoutes = router;
