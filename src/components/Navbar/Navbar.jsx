
import Popup from "../Popup/Popup.jsx";

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";


export default function Navbar() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const location = useLocation();


  return (
    <nav className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar_links">
          {location.pathname === "/" ? ( 
            <>
              <a href="/#" className="navbar__link">Inicio</a> 
              <a href="/#services" className="navbar__link">Servicios</a>
              <a href="/#values" className="navbar__link">Valores</a>
              <a href="/#contact" className="navbar__link">Contacto</a>
            </>
          ) : ( 
            <Link to={location.pathname === "/app/alquimia-digital" ? "/alquimia-digital" : "/"} className="navbar__link">{location.pathname === "/app/alquimia-digital" ? "Volver a la Página" : "Volver al Inicio"}</Link> 
          )}
        </div>
        {location.pathname === "/alquimia-digital" ? (
          <Link to="/app/alquimia-digital" className="navbar__button">Ingresa Ahora</Link>
        ) : (
          <Link to="/alquimia-digital" className="navbar__button">Alquimia Digital</Link>
        )}
      </div>
      <Popup isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false) } />
    </nav>
  );
}