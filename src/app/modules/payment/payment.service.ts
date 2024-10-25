import Order from "../order/order.model";
import { verifyPayment } from "./payment.utils";

const handlePaymentConfirmation = async (
  transactionId: string,
  status: string
) => {
  const order = await Order.findOne({ transactionId });

  if (!order) throw new Error("Order not found");

  if (status === "success") {
    order.status = "Paid";
    order.paymentStatus = "Paid";
  } else {
    order.status = "Cancelled";
    order.paymentStatus = "Failed";
  }

  await order.save();

  return `Payment ${status} and order updated.`;
};

export const paymentService = {
  handlePaymentConfirmation,
};
