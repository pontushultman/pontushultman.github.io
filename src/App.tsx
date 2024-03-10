import { BrowserRouter, Route, Routes } from "react-router-dom"
import { FlagsOfTheWorldRoute } from "./modules/flags-of-the-world/FlagsOfTheWorldRoute"
import { Box } from "@mui/material"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<FlagsOfTheWorldRoute />} />
        <Route path="flags-of-the-world" element={<FlagsOfTheWorldRoute />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
