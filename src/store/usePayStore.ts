"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

type PayStore = {
  promptPay: string;
  amount: number;
  people: number;

  setPromptPay: (value: string) => void;
  setAmount: (value: number) => void;
  setPeople: (value: number) => void;
};

export const usePayStore = create<PayStore>()(
  persist(
    (set) => ({
      promptPay: "",

      amount: 0,

      people: 2,

      setPromptPay: (promptPay) =>
        set({
          promptPay,
        }),

      setAmount: (amount) =>
        set({
          amount,
        }),

      setPeople: (people) =>
        set({
          people,
        }),
    }),
    {
      name: "payshare-storage",

      // จำเฉพาะเบอร์ PromptPay
      partialize: (state) => ({
        promptPay: state.promptPay,
      }),
    }
  )
);