import { create } from "zustand"
import { Cheat } from "./global"

interface CheatState {
  cheat: Cheat | null
  setCheat(cheat: Cheat | null): void
}

export const useCheatState = create<CheatState>()((set) => ({
  cheat: null,
  setCheat: (cheat) => set({ cheat }),
}))
