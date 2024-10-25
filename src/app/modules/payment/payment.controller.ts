import { Request, Response } from "express";
import { paymentService } from "./payment.service";

export const confirmationController = async (req: Request, res: Response) => {
  try {
    const { transactionId, status } = req.query;

    const result = await paymentService.handlePaymentConfirmation(transactionId as string, status as string);

    res.status(200).json({
      success: true,
      message: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Payment confirmation failed.",
      error: (error as Error).message,
    });
  }
};
