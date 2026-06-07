import { Routes, Route } from "react-router-dom";

import Giris from "./pages/Giris";
import KayitOl from "./pages/KayitOl";
import Dashboard from "./pages/Dashboard";
import Kitaplar from "./pages/Kitaplar";
import OduncAlma from "./pages/OduncAlma";
import KitapTeslim from "./pages/KitapTeslim";
import Ogrenciler from "./pages/Ogrenciler";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Giris />} />

      <Route path="/kayit" element={<KayitOl />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/kitaplar"
        element={
          <ProtectedRoute>
            <Kitaplar />
          </ProtectedRoute>
        }
      />

      <Route
        path="/odunc"
        element={
          <ProtectedRoute>
            <OduncAlma />
          </ProtectedRoute>
        }
      />

      <Route
        path="/teslim"
        element={
          <ProtectedRoute>
            <KitapTeslim />
          </ProtectedRoute>
        }
      />

      <Route
        path="/ogrenciler"
        element={
          <ProtectedRoute>
            <Ogrenciler />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default App;