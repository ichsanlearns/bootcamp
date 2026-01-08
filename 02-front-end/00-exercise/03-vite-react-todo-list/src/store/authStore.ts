import { create } from "zustand";

interface AuthState {
  email: string | null;
  setEmail: (email: string) => void;
  clearEmail: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  email: null,
  setEmail: (email: string) => set({ email }),
  clearEmail: () => set({ email: null }),
}));
