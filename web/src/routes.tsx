import PaginaBaseAdmin from "pages/Adm/PaginaBaseAdmin";
import AdmPratos from "pages/Adm/Pratos/AdministracaoPratos";
import AdmRestaurantes from "pages/Adm/Restaurantes/AdmRestaurantes";
import FormRestaurantes from "pages/Adm/Restaurantes/FormRestaurantes";
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
          <Route path="/admin" element={<PaginaBaseAdmin />}>
            <Route path="restaurantes" element={<AdmRestaurantes />} />
            <Route path="restaurantes/novo" element={<FormRestaurantes />} />
            <Route path="restaurantes/:id" element={<FormRestaurantes />} />
            <Route path="pratos" element={<AdmPratos />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}
