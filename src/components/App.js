import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Diplomas from "./Diplomas";
import Diploma from "./Diploma";
import Module from "./Module";
import Header from "./Header";
import Register from "./Register";
import Confirmation from "./Confirmation";
import Favourites from "./Favourites";
import FAQ from "./FAQ";

export default function App() {
  return (
    <div className="app">
      <Header />

      <main className="container main">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="diplomas" element={<Diplomas />}>
            <Route path=":diplomaId" element={<Diploma />}>
              <Route path=":moduleId" element={<Module />} />
              <Route index element={<div className="hint">Select a module to view details.</div>} />
            </Route>
            <Route index element={<div className="hint">Select a diploma from the list.</div>} />
          </Route>

          <Route path="register" element={<Register />} />
          <Route path="confirmed" element={<Confirmation />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path="faq" element={<FAQ />} />

          <Route path="*" element={<h1 className="not-found">Page Not Found</h1>} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          ©2026 <span className="dot">•</span> Republic Polytechnic <span className="dot">•</span> School of Infocomm
        </div>
      </footer>
    </div>
  );
}
