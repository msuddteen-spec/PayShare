"use client";

import { create } from "zustand";

type PayStore = {
  promptPay: string;
  amount: number;
  people: number;

  setPromptPay: (value: string) => void;
  setAmount: (value: number) => void;
  setPeople: (value: number) => void;
};

export const usePayStore = create<PayStore>((set) => ({
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
}));