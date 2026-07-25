"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { QrCode } from "lucide-react";

import { usePayStore } from "@/store/usePayStore";
import { generatePromptPayQR } from "@/lib/qr";
import { formatMoney } from "@/lib/format";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function QRDialog({ open, onOpenChange }: Props) {
  const promptPay = usePayStore((s) => s.promptPay);
  const amount = usePayStore((s) => s.amount);
  const people = usePayStore((s) => s.people);

  const each = people === 0 ? 0 : amount / people;

  const [qr, setQr] = useState("");

  useEffect(() => {
    if (!open) return;

    async function loadQR() {
      if (!promptPay) {
        setQr("");
        return;
      }

      const image = await generatePromptPayQR(promptPay, each);

      setQr(image);
    }

    loadQR();
  }, [open, promptPay, each]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="receipt-paper max-w-[calc(100%-2rem)] rounded-none p-6 sm:max-w-md sm:p-8">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center gap-2 font-mono text-2xl font-black uppercase tracking-normal">
            <QrCode className="h-6 w-6" />
            PromptPay QR
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 text-center">
          <div className="rounded-sm border-2 border-[var(--receipt-ink)] bg-[var(--receipt-highlight)] p-4">
            <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.22em]">
              Each pays
            </p>

            <h2 className="mt-2 text-5xl font-black leading-none tracking-normal">
              ฿{formatMoney(each)}
            </h2>
          </div>

          <div className="rounded-sm border border-dashed border-[var(--receipt-rule)] bg-white p-5 shadow-sm">
            {qr ? (
              <Image
                src={qr}
                alt="PromptPay QR"
                width={288}
                height={288}
                unoptimized
                className="mx-auto h-auto w-72 max-w-full"
              />
            ) : (
              <div className="flex h-72 items-center justify-center font-mono text-sm text-[var(--receipt-muted)]">
                ยังไม่สามารถสร้าง QR ได้
              </div>
            )}
          </div>

          <div className="rounded-sm border border-dashed border-[var(--receipt-rule)] bg-[var(--receipt-soft)] p-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--receipt-muted)]">
              PromptPay
            </p>

            <p className="mt-1 break-all font-mono text-lg font-black">
              {promptPay || "-"}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
