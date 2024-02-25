import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About";
import Formation from "./pages/Formation";
import Projects from "./pages/Projects";

function MainRoutes() {
  
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/formation" element={<Formation/>} />
      

    </Routes>
  )
}

export default MainRoutes;