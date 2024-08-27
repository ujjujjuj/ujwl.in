import CheatContainer from "./components/CheatContainer"
import Hesoyam from "./components/Hesoyam"

export function App() {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        nothing to see here... or is there?
      </div>
      <CheatContainer
        cheats={[
          {
            cheat: "hesoyam",
            component: <Hesoyam />,
          },
        ]}
      />
    </>
  )
}
