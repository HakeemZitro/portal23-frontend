import logo from "../../assets/images/logo_wobggold.webp";
import iconHeart from "../../assets/icons/icon_heart.svg";

import { useLocation, Link } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  return(
    <footer id="reservar" className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <div className="footer__brand-header">
            <img src={logo} alt="Logo Portal 23" className="footer__brand-logo" />
            <span className="footer__brand-name">Portal 23</span>
          </div>
          <p className="footer__brand-description">
            Honrando las tradiciones ancestrales para crear experiencias transformadoras en el mundo moderno.
          </p>
        </div>
        <div className="footer__links-container">
          <h4 className="footer__links-title">Enlaces</h4>
          <ul className="footer__links-list">
            {isLandingPage ? (
              <>
                <li><a href="#services" className="footer__links-link">Servicios</a></li>
                <li><a href="#values" className="footer__links-link">Valores</a></li>
                <li><a href="#testimonials" className="footer__links-link">Tesnios</a></li>
                <li><a href="#contact" className="footer__links-link">Contacto</a></li>
              </>
            ) : (
              <>
                <li><Link to="/" className="footer__links-link">Servicios</Link></li>
                <li><Link to="/" className="footer__links-link">Valores</Link></li>
                <li><Link to="/" className="footer__links-link">Tesnios</Link></li>
                <li><Link to="/" className="footer__links-link">Contacto</Link></li>
              </>
            )}
          </ul>
        </div>
        <div className="footer__links-container">
          <h4 className="footer__links-title">Legal</h4>
          <ul className="footer__links-list">
            <li><a href="#" className="footer__links-link">Privacidad</a></li>
            <li><a href="#" className="footer__links-link">Términos</a></li>
            <li><a href="#" className="footer__links-link">FAQ</a></li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__copyright">
          © 2026 Portal 23. Todos los derechos reservados.
        </p>
        <div className="footer__love-container">
          <p className="footer__love">
            Hecho con <img src={iconHeart} alt="Icono de corazón" className="footer__icon" /> en México
          </p>
          <p className="footer__author">
            por <a href="https://hakeemzitro.github.io/Web-Developer-Portfolio/" target="_blank" rel="noopener noreferrer" className="footer__author-link">Hakeem Ortiz Dev</a>
          </p>
        </div>
      </div>
    </footer>
  );
}