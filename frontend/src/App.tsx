import aosLogo from "/aos.png";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Battle from "./pages/Battle";

function App() {
  return (
    <>
      <div>
        <img src={aosLogo} className="logo" alt="AoS logo" />
      </div>
      <h1>Age of Sigmar Battle Tracker</h1>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/battle" element={<Battle />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
