import iconSparkles from "../../../assets/icons/icon_sparkles.svg";
import iconChevronLeft from "../../../assets/icons/icon_chevron-left.svg";
import iconPlay from "../../../assets/icons/icon_play.svg";
import iconBook from "../../../assets/icons/icon_book.svg";
import iconMusic from "../../../assets/icons/icon_music.svg";
import iconHeart from "../../../assets/icons/icon_heart.svg";
import iconSun from "../../../assets/icons/icon_sun.svg";
import iconFlame from "../../../assets/icons/icon_flame.svg";
import iconShield from "../../../assets/icons/icon_shield.svg";
import iconAward from "../../../assets/icons/icon_award.svg";
import iconQuote from "../../../assets/icons/icon_quote.svg";
import iconFolder from "../../../assets/icons/icon_folder.svg";
import iconClover from "../../../assets/icons/icon_clover.svg";

import heroAlquimia from "../../../assets/images/herocover_alquimia.webp";
import courseCeremonies from "../../../assets/images/course_ceremonies.png";
import courseMeditation from "../../../assets/images/course_meditation.png";
import courseSoundHealing from "../../../assets/images/course_sound_healing.png";

import { Link } from "react-router-dom";

export default function AlquimiaDigital() {
  return (
    <div className="alquimia">
      <Link to="/" className="alquimia__back">
        <img src={iconChevronLeft} alt="Volver" className="alquimia__back-icon" /> Volver al Inicio
      </Link>
      <section className="alquimia__hero">
        <img src={heroAlquimia} alt="Alquimia Digital" className="alquimia__hero-bg" loading="eager" />
        <div className="alquimia__hero-overlay"></div>
        <div className="alquimia__hero-content">
          <div className="alquimia__hero-decoration">
            <img src={iconSparkles} className="alquimia__hero-decoration-icon" alt="" />
            <span className="alquimia__hero-decoration-text">PLATAFORMA HOLÍSTICA</span>
          </div>
          <h1 className="alquimia__hero-title">
            Alquimia <span className="alquimia__hero-title-accent">Digital</span>
          </h1>
          <p className="alquimia__hero-text">
            Tu portal de sabiduría ancestral. Accede a cursos, ceremonias guiadas y contenido exclusivo para transformar tu camino espiritual desde cualquier lugar.
          </p>
          <div className="alquimia__hero-buttons">
            <a href="#cursos" className="alquimia__hero-btn-main">Explorar Cursos</a>
            <a href="#categorias" className="alquimia__hero-btn-secondary">Ver Categorías</a>
          </div>
        </div>
      </section>
      <section className="alquimia__intro">
        <div className="alquimia__intro-container">
          <div className="alquimia__intro-left">
            <span className="alquimia__intro-label">¿QUÉ ES ALQUIMIA DIGITAL?</span>
            <h2 className="alquimia__intro-title">
              Conocimiento ancestral en <span className="alquimia__intro-title-accent">formato moderno</span>
            </h2>
            <p className="alquimia__intro-text">
              Alquimia Digital es nuestra plataforma exclusiva donde reunimos la sabiduría de guías, chamanes y maestros holísticos en cursos digitales accesibles para todos. Cada curso incluye videos, audios guiados y PDFs descargables para que puedas aprender y practicar a tu propio ritmo.
            </p>
            <p className="alquimia__intro-text">
              Desde ceremonias de cacao hasta meditaciones profundas, herbolaria ancestral y sanación con cristales — todo el conocimiento que necesitas para iniciar o profundizar tu camino holístico está aquí.
            </p>
            <div className="alquimia__intro-features">
              <div className="alquimia__intro-feature">
                <div className="alquimia__intro-feature-icon-wrap">
                  <img src={iconPlay} alt="" className="alquimia__intro-feature-icon" />
                </div>
                <div className="alquimia__intro-feature-info">
                  <h4 className="alquimia__intro-feature-title">Videos HD</h4>
                  <p className="alquimia__intro-feature-desc">Lecciones filmadas en espacios ceremoniales reales</p>
                </div>
              </div>
              <div className="alquimia__intro-feature">
                <div className="alquimia__intro-feature-icon-wrap">
                  <img src={iconMusic} alt="" className="alquimia__intro-feature-icon" />
                </div>
                <div className="alquimia__intro-feature-info">
                  <h4 className="alquimia__intro-feature-title">Audios Guiados</h4>
                  <p className="alquimia__intro-feature-desc">Meditaciones y ceremonias para practicar en casa</p>
                </div>
              </div>
              <div className="alquimia__intro-feature">
                <div className="alquimia__intro-feature-icon-wrap">
                  <img src={iconBook} alt="" className="alquimia__intro-feature-icon" />
                </div>
                <div className="alquimia__intro-feature-info">
                  <h4 className="alquimia__intro-feature-title">PDFs Descargables</h4>
                  <p className="alquimia__intro-feature-desc">Guías, recetas y manuales para consultar siempre</p>
                </div>
              </div>
            </div>
          </div>
          <div className="alquimia__intro-right">
            <div className="alquimia__intro-image-wrap">
              <img src={courseCeremonies} alt="Ceremonias holísticas" className="alquimia__intro-image" />
            </div>
          </div>
        </div>
      </section>
      <section className="alquimia__categories" id="categorias">
        <div className="alquimia__categories-container">
          <div className="alquimia__categories-header">
            <span className="alquimia__categories-label">EXPLORA POR TEMA</span>
            <h2 className="alquimia__categories-title">
              Categorías de <span className="alquimia__categories-title-accent">contenido</span>
            </h2>
          </div>
          <div className="alquimia__categories-grid">
            <div className="alquimia__categories-card">
              <div className="alquimia__categories-card-icon-wrap">
                <img src={iconFlame} alt="" className="alquimia__categories-card-icon" />
              </div>
              <h3 className="alquimia__categories-card-title">Ceremonias</h3>
              <p className="alquimia__categories-card-desc">Cacao, temazcal, luna llena y más rituales sagrados paso a paso.</p>
              <span className="alquimia__categories-card-count">8 cursos</span>
            </div>
            <div className="alquimia__categories-card">
              <div className="alquimia__categories-card-icon-wrap">
                <img src={iconSun} alt="" className="alquimia__categories-card-icon" />
              </div>
              <h3 className="alquimia__categories-card-title">Meditación</h3>
              <p className="alquimia__categories-card-desc">Técnicas ancestrales y modernas para la conexión interior profunda.</p>
              <span className="alquimia__categories-card-count">6 cursos</span>
            </div>
            <div className="alquimia__categories-card">
              <div className="alquimia__categories-card-icon-wrap">
                <img src={iconMusic} alt="" className="alquimia__categories-card-icon" />
              </div>
              <h3 className="alquimia__categories-card-title">Sonido Sanador</h3>
              <p className="alquimia__categories-card-desc">Cuencos tibetanos, mantras, y frecuencias de sanación.</p>
              <span className="alquimia__categories-card-count">3 cursos</span>
            </div>
          </div>
        </div>
      </section>
      <section className="alquimia__courses" id="cursos">
        <div className="alquimia__courses-container">
          <div className="alquimia__courses-header">
            <span className="alquimia__courses-label">CONTENIDO PREMIUM</span>
            <h2 className="alquimia__courses-title">
              Cursos <span className="alquimia__courses-title-accent">destacados</span>
            </h2>
          </div>
          <div className="alquimia__courses-grid">
            <div className="alquimia__courses-card">
              <div className="alquimia__courses-card-image-wrap">
                <img src={courseCeremonies} alt="Ceremonias Sagradas" className="alquimia__courses-card-image" />
                <div className="alquimia__courses-card-badge">Más popular</div>
              </div>
              <div className="alquimia__courses-card-body">
                <span className="alquimia__courses-card-category">Ceremonias</span>
                <h3 className="alquimia__courses-card-title">Ceremonias Sagradas: Guía Completa</h3>
                <p className="alquimia__courses-card-desc">Aprende a facilitar ceremonias de cacao, luna llena, equinoccio y solsticio con esta guía integral.</p>
                <div className="alquimia__courses-card-meta">
                  <span className="alquimia__courses-card-lessons">
                    <img src={iconFolder} alt="" className="alquimia__courses-card-meta-icon" /> 12 lecciones
                  </span>
                  <span className="alquimia__courses-card-duration">8h 30min</span>
                </div>
                <div className="alquimia__courses-card-footer">
                  <span className="alquimia__courses-card-price">TBD MXN</span>
                  <Link to="/app/alquimia-digital" className="alquimia__courses-card-btn">Comprar</Link>
                </div>
              </div>
            </div>
            <div className="alquimia__courses-card">
              <div className="alquimia__courses-card-image-wrap">
                <img src={courseMeditation} alt="Meditación y Energía" className="alquimia__courses-card-image" />
              </div>
              <div className="alquimia__courses-card-body">
                <span className="alquimia__courses-card-category">Meditación</span>
                <h3 className="alquimia__courses-card-title">Meditación y Sanación Energética</h3>
                <p className="alquimia__courses-card-desc">Técnicas de meditación profunda, activación de chakras y canalización de energía vital.</p>
                <div className="alquimia__courses-card-meta">
                  <span className="alquimia__courses-card-lessons">
                    <img src={iconFolder} alt="" className="alquimia__courses-card-meta-icon" /> 10 lecciones
                  </span>
                  <span className="alquimia__courses-card-duration">6h 45min</span>
                </div>
                <div className="alquimia__courses-card-footer">
                  <span className="alquimia__courses-card-price">TBD MXN</span>
                  <Link to="/app/alquimia-digital" className="alquimia__courses-card-btn">Comprar</Link>
                </div>
              </div>
            </div>
            <div className="alquimia__courses-card">
              <div className="alquimia__courses-card-image-wrap">
                <img src={courseSoundHealing} alt="Sonido Sanador" className="alquimia__courses-card-image" />
              </div>
              <div className="alquimia__courses-card-body">
                <span className="alquimia__courses-card-category">Sonido Sanador</span>
                <h3 className="alquimia__courses-card-title">Terapia de Sonido y Mantras</h3>
                <p className="alquimia__courses-card-desc">Cuencos tibetanos, mantras sagrados y frecuencias de sanación para armonizar cuerpo y mente.</p>
                <div className="alquimia__courses-card-meta">
                  <span className="alquimia__courses-card-lessons">
                    <img src={iconFolder} alt="" className="alquimia__courses-card-meta-icon" /> 9 lecciones
                  </span>
                  <span className="alquimia__courses-card-duration">7h 10min</span>
                </div>
                <div className="alquimia__courses-card-footer">
                  <span className="alquimia__courses-card-price">TBD MXN</span>
                  <Link to="/app/alquimia-digital" className="alquimia__courses-card-btn">Comprar</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="alquimia__why">
        <div className="alquimia__why-container">
          <div className="alquimia__why-header">
            <span className="alquimia__why-label">NUESTRA DIFERENCIA</span>
            <h2 className="alquimia__why-title">
              ¿Por qué <span className="alquimia__why-title-accent">Alquimia Digital?</span>
            </h2>
          </div>
          <div className="alquimia__why-grid">
            <div className="alquimia__why-card">
              <div className="alquimia__why-card-icon-wrap">
                <img src={iconShield} alt="" className="alquimia__why-card-icon" />
              </div>
              <h3 className="alquimia__why-card-title">Guías Certificados</h3>
              <p className="alquimia__why-card-desc">Todos nuestros instructores son guías con años de experiencia en prácticas holísticas reales.</p>
            </div>
            <div className="alquimia__why-card">
              <div className="alquimia__why-card-icon-wrap">
                <img src={iconHeart} alt="" className="alquimia__why-card-icon" />
              </div>
              <h3 className="alquimia__why-card-title">Contenido con Alma</h3>
              <p className="alquimia__why-card-desc">Cada curso es creado con intención y respeto por las tradiciones ancestrales que honramos.</p>
            </div>
            <div className="alquimia__why-card">
              <div className="alquimia__why-card-icon-wrap">
                <img src={iconClover} alt="" className="alquimia__why-card-icon" />
              </div>
              <h3 className="alquimia__why-card-title">Acceso de por Vida</h3>
              <p className="alquimia__why-card-desc">Compra una vez y accede para siempre. Repasa, practica y profundiza cuando lo necesites.</p>
            </div>
            <div className="alquimia__why-card">
              <div className="alquimia__why-card-icon-wrap">
                <img src={iconAward} alt="" className="alquimia__why-card-icon" />
              </div>
              <h3 className="alquimia__why-card-title">Certificado de Completación</h3>
              <p className="alquimia__why-card-desc">Recibe un certificado digital al finalizar cada curso que avala tu formación holística.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="alquimia__testimonials">
        <div className="alquimia__testimonials-container">
          <div className="alquimia__testimonials-header">
            <span className="alquimia__testimonials-label">EXPERIENCIAS</span>
            <h2 className="alquimia__testimonials-title">
              Lo que dicen nuestros <span className="alquimia__testimonials-title-accent">alumnos</span>
            </h2>
          </div>
          <div className="alquimia__testimonials-grid">
            <div className="alquimia__testimonials-card">
              <img src={iconQuote} alt="" className="alquimia__testimonials-card-quote-icon" />
              <p className="alquimia__testimonials-card-text">
                "El curso de Ceremonias Sagradas transformó mi práctica por completo. Ahora puedo facilitar ceremonias en mi comunidad con confianza y respeto."
              </p>
              <div className="alquimia__testimonials-card-author">
                <img src="" alt="María Alejandra" className="alquimia__testimonials-card-avatar" />
                <div className="alquimia__testimonials-card-author-info">
                  <span className="alquimia__testimonials-card-name">María Alejandra</span>
                  <span className="alquimia__testimonials-card-course">Ceremonias Sagradas</span>
                </div>
              </div>
            </div>
            <div className="alquimia__testimonials-card">
              <img src={iconQuote} alt="" className="alquimia__testimonials-card-quote-icon" />
              <p className="alquimia__testimonials-card-text">
                "Los audios de meditación guiada son una joya. Los uso cada mañana y he notado un cambio profundo en mi bienestar emocional y mental."
              </p>
              <div className="alquimia__testimonials-card-author">
                <img src="" alt="Carlos Ramírez" className="alquimia__testimonials-card-avatar" />
                <div className="alquimia__testimonials-card-author-info">
                  <span className="alquimia__testimonials-card-name">Carlos Ramírez</span>
                  <span className="alquimia__testimonials-card-course">Meditación y Energía</span>
                </div>
              </div>
            </div>
            <div className="alquimia__testimonials-card">
              <img src={iconQuote} alt="" className="alquimia__testimonials-card-quote-icon" />
              <p className="alquimia__testimonials-card-text">
                "La herbolaria mexicana siempre me fascinó. Este curso me dio las herramientas para preparar mis propios remedios naturales. ¡Increíble contenido!"
              </p>
              <div className="alquimia__testimonials-card-author">
                <img src="" alt="aura Villanueva" className="alquimia__testimonials-card-avatar" />
                <div className="alquimia__testimonials-card-author-info">
                  <span className="alquimia__testimonials-card-name">Laura Villanueva</span>
                  <span className="alquimia__testimonials-card-course">Terapia de Sonido</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
