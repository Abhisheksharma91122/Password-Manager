import Home from "./components/Home"
import Navbar from "./components/Navbar"
import { Router, Routes, Route } from "react-router-dom"

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/contact" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
