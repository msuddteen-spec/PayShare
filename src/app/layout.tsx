import "@/styles/globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PayShare v2 - Receipt Edition",
  description: "Split restaurant receipts with PromptPay QR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
