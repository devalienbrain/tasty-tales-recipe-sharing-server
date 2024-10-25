import { initiatePayment } from "../payment/payment.utils";
import Order from "./order.model";

const createOrder = async (orderData: any) => {
  const { user, totalPayableAmount } = orderData;
  const transactionId = `TXN-${Date.now()}`;

  const order = new Order({
    user,
    totalPayableAmount,
    status: "Pending",
    paymentStatus: "Pending",
    transactionId,
  });

  await order.save();

  const paymentData = {
    transactionId,
    totalPrice: totalPayableAmount,
    customerName: user.name,
    customerEmail: user.email,
    customerPhone: user.phone,
    customerAddress: user.address,
  };

  const paymentSession = await initiatePayment(paymentData);

  return paymentSession;
};

export const orderService = {
  createOrder,
};
