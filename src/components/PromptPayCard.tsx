"use client";

import { useState } from "react";
import { Pencil, Smartphone } from "lucide-react";

import AppButton from "@/components/AppButton";
import AppCard from "@/components/AppCard";
import AppInput from "@/components/AppInput";

import { usePayStore } from "@/store/usePayStore";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function PromptPayCard() {
  const promptPay = usePayStore((s) => s.promptPay);
  const setPromptPay = usePayStore((s) => s.setPromptPay);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(promptPay);

  return (
    <>
      <AppCard>
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-dashed border-[var(--receipt-rule)] bg-[var(--receipt-soft)]">
              <Smartphone className="h-5 w-5" />
            </div>

            <div className="min-w-0">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-[var(--receipt-muted)]">
                PromptPay
              </p>

              <p className="mt-1 break-all font-mono text-lg font-black tracking-normal">
                {promptPay || "ยังไม่ได้ตั้งค่า"}
              </p>

              <p className="mt-1 font-mono text-xs text-[var(--receipt-muted)]">
                Payment account printed on receipt
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              setValue(promptPay);
              setOpen(true);
            }}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-[var(--receipt-rule)] transition hover:bg-[var(--receipt-soft)]"
            aria-label="แก้ไข PromptPay"
          >
            <Pencil className="h-4 w-4" />
          </button>
        </div>
      </AppCard>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="receipt-paper max-w-[calc(100%-2rem)] rounded-none p-6 sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center font-mono text-2xl font-black uppercase tracking-normal">
              ตั้งค่า PromptPay
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-5 pt-2">
            <div className="space-y-2">
              <label className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--receipt-muted)]">
                เบอร์โทรศัพท์ หรือเลขบัตรประชาชน
              </label>

              <AppInput
                className="border-b border-dashed border-[var(--receipt-rule)] py-2 text-left text-2xl sm:text-3xl"
                placeholder="0901095221"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>

            <AppButton
              onClick={() => {
                setPromptPay(value);
                setOpen(false);
              }}
            >
              Save
            </AppButton>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
