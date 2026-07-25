"use client";

import AppCard from "@/components/AppCard";
import { formatMoney } from "@/lib/format";
import { usePayStore } from "@/store/usePayStore";

export default function SplitSummary() {
  const amount = usePayStore((s) => s.amount);
  const people = usePayStore((s) => s.people);

  const each = people === 0 ? 0 : amount / people;

  return (
    <AppCard className="border-b-0 pb-0">
      <div className="space-y-4 rounded-sm border-2 border-[var(--receipt-ink)] bg-[var(--receipt-highlight)] px-4 py-5 text-center">
        <div>
          <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.22em]">
            Each pays
          </p>

          <h2 className="mt-2 text-5xl font-black leading-none tracking-normal sm:text-6xl">
            ฿{formatMoney(each)}
          </h2>
        </div>

        <div className="grid grid-cols-[1fr_auto_1fr] items-center rounded-sm bg-[var(--receipt-paper)] px-4 py-3 text-left">
          <div>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--receipt-muted)]">
              Total
            </p>

            <p className="mt-1 font-mono text-sm font-bold">
              ฿{formatMoney(amount)}
            </p>
          </div>

          <div className="h-10 w-px bg-[var(--receipt-rule)]" />

          <div className="text-right">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--receipt-muted)]">
              People
            </p>

            <p className="mt-1 font-mono text-sm font-bold">{people} คน</p>
          </div>
        </div>
      </div>
    </AppCard>
  );
}
