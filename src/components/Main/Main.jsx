import Landing from "./Pages/Landing.jsx";
import CeremoniaDelCacao from "./Pages/CeremoniaCacao.jsx";
import CeremoniaSanacionDelLinaje from "./Pages/CeremoniaSanacionDelLinaje.jsx";
import CeremoniaUnionDeAlmas from "./Pages/CeremoniaUnionDeAlmas.jsx";
import CeremoniaVueltaAlSol from "./Pages/CeremoniaVueltaAlSol.jsx";
import AlquimiaDigital from "./Pages/AlquimiaDigital.jsx";
import AppAlquimiaDigital from "./AlquimiaDigital/AppAlquimiaDigital.jsx";

import { Routes, Route } from 'react-router-dom';

export default function Main() {

  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/ceremonia-del-cacao" element={<CeremoniaDelCacao />} />
        <Route path="/sanacion-del-linaje" element={<CeremoniaSanacionDelLinaje />} />
        <Route path="/union-de-almas" element={<CeremoniaUnionDeAlmas />} />
        <Route path="/vuelta-al-sol" element={<CeremoniaVueltaAlSol />} />
        <Route path="/alquimia-digital" element={<AlquimiaDigital />} />
      </Routes>
    </main>
  );
}