import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";
import AppAlquimiaDigital from "./Main/AlquimiaDigital/AppAlquimiaDigital.jsx";

import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/app/alquimia-digital" element={<AppAlquimiaDigital />} />
        <Route path="/*" element={
          <>
            <Header />
            <Main />
            <Footer />
          </>
        } />
      </Routes>
    </>
  )
}

export default App;