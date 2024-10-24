import { User } from "../user/user.model";
import { verifyPayment } from "./payment.utils";

const confirmationService = async (transactionId: string, status: string) => {
  // Verify the payment transaction
  const verifyResponse = await verifyPayment(transactionId);

  if (verifyResponse && verifyResponse.pay_status === "Successful") {
    // Update user's subscription status to 'Premium'
    const updatedUser = await User.findOneAndUpdate(
      { "transactions.transactionId": transactionId }, // Find user by transaction
      { $set: { "subscription.status": "Premium" } }, // Set subscription to Premium
      { new: true } // Return updated user
    );

    if (!updatedUser) {
      throw new Error("User not found or update failed.");
    }

    return {
      message: "Payment Success! User upgraded to Premium.",
      user: updatedUser,
      transactionId,
    };
  } else {
    throw new Error("Payment failed or not verified.");
  }
};

export const paymentServices = {
  confirmationService,
};
