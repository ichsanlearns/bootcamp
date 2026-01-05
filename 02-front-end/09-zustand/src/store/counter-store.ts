import { create } from "zustand";

type TCounterStore = {
  counter: number;

  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

export const useCounterStore = create<TCounterStore>((set) => {
  return {
    counter: 0, // state

    // set 1
    increment: () => {
      set((state) => {
        return { counter: state.counter + 1 };
      });
    },

    // set 2
    decrement: () => {
      set((state) => {
        return { counter: state.counter - 1 };
      });
    },

    // set 3
    reset: () => {
      set(() => {
        return { counter: 0 };
      });
    },
  };
});
