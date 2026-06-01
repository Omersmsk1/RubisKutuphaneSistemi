import { Routes, Route } from "react-router-dom";
import Giris from "./pages/Giris";
import KayitOl from "./pages/KayitOl";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Giris />} />
      <Route path="/kayit" element={<KayitOl />} />
    </Routes>
  );
}

export default App;