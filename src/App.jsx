import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout"
import API from "./Layout/pages/API";
import Calculadora from "./Layout/pages/Calculadora";
import Contador from "./Layout/pages/Contador"
import Galeria from "./Layout/pages/Galeria";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/contador" element={<Contador />} />
        <Route path="/calculadora" element={<Calculadora />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/ejemplo-api" element={<API />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )

}

export default App
