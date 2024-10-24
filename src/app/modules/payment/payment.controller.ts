import { Request, Response } from "express";
import { paymentServices } from "./payment.service";

const confirmationController = async (req: Request, res: Response) => {
  const { transactionId, status } = req.query;

  try {
    const result = await paymentServices.confirmationService(
      transactionId as string,
      status as string
    );
    res.send(result); // Send the result as confirmation HTML or a JSON response
  } catch (error) {
    res.status(500).json({ error: "Payment confirmation failed!" });
  }
};

export const paymentController = {
  confirmationController,
};
