"use client";

import { NumericFormat } from "react-number-format";

import AppCard from "@/components/AppCard";
import AppInput from "@/components/AppInput";
import { usePayStore } from "@/store/usePayStore";

export default function AmountInput() {
  const amount = usePayStore((s) => s.amount);
  const setAmount = usePayStore((s) => s.setAmount);

  return (
    <AppCard>
      <div className="space-y-3">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-[var(--receipt-muted)]">
              Total
            </p>
            <p className="mt-1 text-sm font-semibold">ยอดรวม</p>
          </div>

          <div className="min-w-0 flex-1">
            <NumericFormat
              customInput={AppInput}
              value={amount || ""}
              thousandSeparator=","
              decimalSeparator="."
              decimalScale={2}
              fixedDecimalScale={false}
              allowNegative={false}
              inputMode="decimal"
              placeholder="฿0.00"
              onValueChange={(values) => {
                setAmount(values.floatValue ?? 0);
              }}
            />
          </div>
        </div>

        <p className="font-mono text-xs text-[var(--receipt-muted)]">
          Enter full receipt amount
        </p>
      </div>
    </AppCard>
  );
}
