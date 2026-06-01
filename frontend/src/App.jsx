import { Routes, Route } from "react-router-dom";

import Giris from "./pages/Giris";
import KayitOl from "./pages/KayitOl";
import Dashboard from "./pages/Dashboard";
import Kitaplar from "./pages/Kitaplar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Giris />} />
      <Route path="/kayit" element={<KayitOl />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/kitaplar" element={<Kitaplar />} />
    </Routes>
  );
}

export default App;