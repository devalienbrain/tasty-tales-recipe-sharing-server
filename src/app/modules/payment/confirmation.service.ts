import { join } from "path";
import orderModel from "../order/order.model";
import { verifyPayment } from "./payment.utils";
import { readFileSync } from "fs";

export const confirmationService = async (
  transactionId: string,
  status: string
) => {
  // Verify the payment
  const verifyResponse = await verifyPayment(transactionId);

  let result;
  let message = "";

  // If the payment was successful
  if (verifyResponse && verifyResponse.pay_status === "Successful") {
    result = await orderModel.findOneAndUpdate(
      { transactionId },
      { paymentStatus: "Paid" }
    );

    if (result) {
      message = "Successfully Paid..";
    }
  } else {
    message = "Payment Failed!";
  }

  // Load and modify the HTML template for confirmation message
  const filePath = join(__dirname, "../../../views/confirmation.html");
  let template = readFileSync(filePath, "utf-8");

  // Replace placeholders in the HTML template with dynamic values from result
  template = template
    .replace("{{message}}", message)
    .replace("{{user.name}}", result?.user?.name || "N/A")
    .replace("{{user.email}}", result?.user?.email || "N/A")
    .replace("{{user.phone}}", result?.user?.phone || "N/A")
    .replace("{{user.address}}", result?.user?.address || "N/A")
    .replace("{{transactionId}}", result?.transactionId || "N/A")
    .replace(
      "{{totalPayableAmount}}",
      result?.totalPayableAmount?.toFixed(2) || "0.00"
    )
    .replace(
      "{{createdAt}}",
      result?.createdAt ? new Date(result.createdAt).toDateString() : "N/A"
    );

  return template;
};
