import { Routes, Route } from "react-router-dom";
import Giris from "./pages/Giris";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Giris />} />
    </Routes>
  );
}

export default App;