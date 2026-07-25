import QRCode from "qrcode";
import generatePayload from "promptpay-qr";

export async function generatePromptPayQR(
  promptPay: string,
  amount: number
) {
  const payload = generatePayload(promptPay, {
    amount,
  });

  return await QRCode.toDataURL(payload);
}