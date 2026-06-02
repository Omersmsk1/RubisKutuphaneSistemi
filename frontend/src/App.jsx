import { Routes, Route } from "react-router-dom";

import Giris from "./pages/Giris";
import KayitOl from "./pages/KayitOl";
import Dashboard from "./pages/Dashboard";
import Kitaplar from "./pages/Kitaplar";
import OduncAlma from "./pages/OduncAlma";
import KitapTeslim from "./pages/KitapTeslim";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Giris />} />
      <Route path="/kayit" element={<KayitOl />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/kitaplar" element={<Kitaplar />} />
      <Route path="/odunc" element={<OduncAlma />} />
      <Route path="/teslim" element={<KitapTeslim />} />
    </Routes>
  );
}

export default App;