import AdmRestaurantes from "pages/Adm/Restaurantes/AdmRestaurantes";
import Home from "pages/Home";
import VitrineRestaurantes from "pages/VitrineRestaurantes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurantes" element={<VitrineRestaurantes />} />
          <Route path="/admin/restaurantes" element={<AdmRestaurantes />} />
        </Routes>
      </Router>
    </main>
  );
}
