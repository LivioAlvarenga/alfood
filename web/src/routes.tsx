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
        </Routes>
      </Router>
    </main>
  );
}
