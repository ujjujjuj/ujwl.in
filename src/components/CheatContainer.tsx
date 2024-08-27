import { createPortal, useEffect, useRef, useState } from "preact/compat"
import { useCheatState } from "../store"
import { Cheat } from "../global"

const CLEAR_TIME = 1000

const CheatContainer = ({ cheats }: { cheats: Array<Cheat> }) => {
  const { cheat, setCheat } = useCheatState()

  const cancelTimeout = useRef<number | null>(null)
  const [cheatBuffer, setCheatBuffer] = useState<Array<string>>([])

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
    console.log(cheatBuffer.join(""))

    cheats.forEach((cheat) => {
      if (cheat.cheat === cheatBuffer.slice(-cheat.cheat.length).join("")) {
        setCheat(cheat)
        setCheatBuffer([])
        return
      }
    })
  }, [cheats, cheatBuffer])

  if (cheat === null) return null

  return createPortal(
    <div className="cheat" onClick={() => setCheat(null)}>
      {cheat.component}
    </div>,
    document.body
  )
}

export default CheatContainer
