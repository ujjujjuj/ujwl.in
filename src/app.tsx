import cheats from "./cheats"
import CheatContainer from "./components/cheat-container"
import { Route, BrowserRouter, Navigate, Routes } from "react-router-dom"
import HomePage from "./pages"
import ExternalRedirect from "./components/external-redirect"

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/nptel"
            element={
              <ExternalRedirect to="https://github.com/ujjujjuj/BetterNPTEL" />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
      <CheatContainer cheats={cheats} />
    </>
  )
}
