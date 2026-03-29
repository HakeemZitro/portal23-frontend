import heroBackground from "../../../../assets/images/herocover_landing.avif";
import iconSparkles from "../../../../assets/icons/icon_sparkles.svg";
import iconChevronDown from "../../../../assets/icons/icon_chevron-down.svg";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <img src={heroBackground} className="hero__background" alt="Ceremonia holística de Portal 23 - Reconexión espiritual en Aguascalientes" loading="eager" />
      <div className="hero__background-overlay"></div>
      <div className="hero__content">
        <div className="hero__decoration">
          <img src={iconSparkles} className="hero__decoration-icon" />
          <span className="hero__decoration-text">BIENVENIDO A TU VIAJE INTERIOR</span>
        </div>
        <h1 className="hero__title">Portal <span className="hero__title-accent">23</span></h1>
        <p className="hero__text">Reconecta con tu esencia a través de ceremonias ancestrales. Un espacio sagrado donde el alma encuentra su camino de vuelta a casa.</p>
        <div className="hero__buttons">
          <a href="#services" className="hero__button-main">Explorar Ceremonias</a>
          <a href="#values" className="hero__button-secondary">Conoce Nuestra Filosofía</a>
        </div>
      </div>
      <a href="#intro" className="hero__indicator">
        <span className="hero__indicator-text">DESCUBRE MÁS</span>
        <img src={iconChevronDown} alt="Icono de flecha hacia abajo" className="hero__indicator-chevron" />
      </a>
    </section>
  );
}