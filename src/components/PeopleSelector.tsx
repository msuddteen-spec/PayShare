"use client";

import { useEffect, useRef, useState } from "react";
import { Minus, Plus } from "lucide-react";

import AppCard from "@/components/AppCard";
import { usePayStore } from "@/store/usePayStore";

export default function PeopleSelector() {
  const people = usePayStore((s) => s.people);
  const setPeople = usePayStore((s) => s.setPeople);

  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(String(people));

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus();
      inputRef.current?.select();
    }
  }, [editing]);

  function save() {
    const number = Number(value);

    if (isNaN(number) || number < 1) {
      setPeople(1);
    } else {
      setPeople(number);
    }

    setEditing(false);
  }

  return (
    <AppCard>
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-[var(--receipt-muted)]">
              People
            </p>
            <p className="mt-1 text-sm font-semibold">จำนวนคน</p>
          </div>
          <p className="pt-1 font-mono text-xs text-[var(--receipt-muted)]">
            Tap count
          </p>
        </div>

        <div className="flex items-center justify-between gap-3 rounded-sm border border-dashed border-[var(--receipt-rule)] bg-[var(--receipt-soft)] px-3 py-2">
          <button
            onClick={() => setPeople(Math.max(1, people - 1))}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-[var(--receipt-rule)] transition-all hover:bg-[var(--receipt-paper)] active:scale-95"
            aria-label="Decrease people"
          >
            <Minus className="h-5 w-5" />
          </button>

          <div className="flex min-w-0 flex-1 justify-center px-2">
            {editing ? (
              <input
                ref={inputRef}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onBlur={save}
                onKeyDown={(e) => {
                  if (e.key === "Enter") save();
                }}
                className="w-full bg-transparent text-center font-mono text-4xl font-black tracking-normal outline-none"
              />
            ) : (
              <button
                onClick={() => {
                  setValue(String(people));
                  setEditing(true);
                }}
                className="w-full py-1 text-center font-mono text-4xl font-black tracking-normal"
              >
                {people}
              </button>
            )}
          </div>

          <button
            onClick={() => setPeople(people + 1)}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-[var(--receipt-rule)] transition-all hover:bg-[var(--receipt-paper)] active:scale-95"
            aria-label="Increase people"
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>
    </AppCard>
  );
}
