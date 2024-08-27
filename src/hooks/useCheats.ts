import { useEffect, useRef, useState } from "preact/hooks"
import { Cheat } from "../global"
import { useCheatState } from "../store"

const CLEAR_TIME = 1000

const useCheats = (cheats: Array<Cheat>) => {
  const cancelTimeout = useRef<number | null>(null)
  const [cheatBuffer, setCheatBuffer] = useState<Array<string>>([])
  const { setCheat } = useCheatState()

  const keyboardListenerFunc = (e: KeyboardEvent) => {
    if (cancelTimeout.current) clearTimeout(cancelTimeout.current)

    if (e.key === "Escape") {
      setCheat(null)
      return
    }

    cancelTimeout.current = setTimeout(() => setCheatBuffer([]), CLEAR_TIME)
    setCheatBuffer((_buf) => [..._buf, e.key])
  }

  useEffect(() => {
    document.addEventListener("keydown", keyboardListenerFunc)

    return () => document.removeEventListener("keydown", keyboardListenerFunc)
  }, [keyboardListenerFunc])

  useEffect(() => {
    cheats.forEach((cheat) => {
      if (cheat.cheat === cheatBuffer.slice(-cheat.cheat.length).join("")) {
        setCheat(cheat)
        setCheatBuffer([])
        return
      }
    })
  }, [cheats, cheatBuffer])
}

export default useCheats
