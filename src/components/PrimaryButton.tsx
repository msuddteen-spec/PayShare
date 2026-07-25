"use client";

import { QrCode } from "lucide-react";

import AppButton from "@/components/AppButton";

interface PrimaryButtonProps {
  onClick: () => void;
}

export default function PrimaryButton({ onClick }: PrimaryButtonProps) {
  return (
    <AppButton onClick={onClick}>
      <QrCode className="mr-2 h-5 w-5" />
      Print QR
    </AppButton>
  );
}
