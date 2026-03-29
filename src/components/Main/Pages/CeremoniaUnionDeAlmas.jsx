import iconHeart from "../../../assets/icons/icon_heart.svg";
import iconSun from "../../../assets/icons/icon_sun.svg";
import iconFeather from "../../../assets/icons/icon_feather.svg";
import iconMoon from "../../../assets/icons/icon_moon.svg";
import iconShield from "../../../assets/icons/icon_shield.svg";
import iconUsers from "../../../assets/icons/icon_users.svg";
import iconClock from "../../../assets/icons/icon_clock.svg";
import iconMapPin from "../../../assets/icons/icon_map-pin.svg";
import iconDroplets from "../../../assets/icons/icon_droplets.svg";
import iconFlame from "../../../assets/icons/icon_flame.svg";
import iconChevronLeft from "../../../assets/icons/icon_chevron-left.svg";
import iconSparkles from "../../../assets/icons/icon_sparkles.svg";
import herocoverUnionDeAlmas from "../../../assets/images/herocover_union-de-almas.webp";

import { Link } from "react-router-dom";

export default function CeremoniaUnionDeAlmas() {
  return (
    <div className="ceremony">
      <Link to="/" className="ceremony__back"> 
        <img src={iconChevronLeft} alt="Icono de flecha izquierda" className="ceremony__back-icon" /> Volver al Inicio 
      </Link>
      <section className="ceremony__hero">
        <img src={herocoverUnionDeAlmas} alt="Ceremonia de Unión de Almas" className="ceremony__hero-background" loading="eager" />
        <div className="ceremony__hero-overlay"></div>
        <div className="ceremony__hero-content">
          <div className="ceremony__hero-decoration">
            <img src={iconSparkles} className="ceremony__hero-decoration-icon" alt="" />
            <span className="ceremony__hero-decoration-text">UNIÓN SAGRADA</span>
          </div>
          <h1 className="ceremony__hero-title">
            Unión de <span className="ceremony__hero-title-accent">Almas</span>
          </h1>
          <p className="ceremony__hero-text">Celebra el amor en su forma más pura con una ceremonia espiritual que entrelaza dos almas en un pacto sagrado de corazón a corazón.</p>
        </div>
      </section>
      <section className="ceremony__intro">
        <div className="ceremony__intro-container">
          <div className="ceremony__intro-image-container">
            <img src={herocoverUnionDeAlmas} alt="Ceremonia img" className="ceremony__intro-image" />
          </div>
          <div className="ceremony__intro-info">
            <span className="ceremony__intro-info-head">AMOR CONSCIENTE</span>
            <h2 className="ceremony__intro-info-title">
              Un vínculo que trasciende <span className="ceremony__intro-info-title-accent">lo terrenal</span>
            </h2>
            <p className="ceremony__intro-info-text">
              La ceremonia de Unión de Almas es un ritual espiritual que honra el encuentro de dos seres que eligen caminar juntos. A diferencia de una boda convencional, esta ceremonia conecta a la pareja con las fuerzas de la naturaleza, los elementos y la energía del universo.</p>
            <p className="ceremony__intro-info-text">
              Guiados por un chamán o facilitador espiritual, la pareja participa en rituales de intercambio de ofrendas, atado de manos con hilos sagrados, compartir cacao ceremonial y bendiciones con copal y salvia. Cada elemento simboliza un aspecto de la unión: confianza, compromiso, pasión y crecimiento.</p>
            <p className="ceremony__intro-info-text">
              Esta ceremonia puede realizarse como complemento a una boda civil, como renovación de votos o simplemente como un acto de compromiso espiritual entre dos almas que se reconocen.</p>
          </div>
        </div>
      </section>
      <section className="ceremony__benefits">
        <div className="ceremony__benefits-container">
          <div className="ceremony__benefits-header">
            <span className="ceremony__benefits-header-span">BENEFICIOS</span>
            <h2 className="ceremony__benefits-header-title">
              Lo que la unión sagrada <span className="ceremony__benefits-header-title-accent">les ofrece</span>
            </h2>
          </div>
          <div className="ceremony__benefits-cards">
            <div className="ceremony__benefits-card">
              <div className="ceremony__benefits-card-icon-container">
                <img src={iconHeart} alt="Icono de corazón" className="ceremony__benefits-card-icon"/>
              </div>
              <h3 className="ceremony__benefits-card-title">
                Conexión Profunda
              </h3>
              <p className="ceremony__benefits-card-description">
                La ceremonia crea un espacio íntimo y sagrado donde ambos pueden expresar su amor de manera auténtica, fortaleciendo el vínculo emocional y espiritual.</p>
            </div>
            <div className="ceremony__benefits-card">
              <div className="ceremony__benefits-card-icon-container">
                <img src={iconSun} alt="Icono de sol" className="ceremony__benefits-card-icon"/>
              </div>
              <h3 className="ceremony__benefits-card-title">
                Intención Compartida
              </h3>
              <p className="ceremony__benefits-card-description">
                Establecen juntos las intenciones y visiones para su camino en común, creando un mapa espiritual que guiará su relación con propósito y claridad.</p>
            </div>
            <div className="ceremony__benefits-card">
              <div className="ceremony__benefits-card-icon-container">
                <img src={iconFeather} alt="Icono de pluma" className="ceremony__benefits-card-icon"/>
              </div>
              <h3 className="ceremony__benefits-card-title">
                Sanación en Pareja
              </h3>
              <p className="ceremony__benefits-card-description">
                El ritual permite soltar heridas pasadas, resentimientos y miedos que puedan interferir en la relación, abriendo espacio para un amor más libre y pleno.</p>
            </div>
            <div className="ceremony__benefits-card">
              <div className="ceremony__benefits-card-icon-container">
                <img src={iconMoon} alt="Icono de luna" className="ceremony__benefits-card-icon"/>
              </div>
              <h3 className="ceremony__benefits-card-title">
                Bendición Elemental
              </h3>
              <p className="ceremony__benefits-card-description">
                La unión se sella con la bendición de los cuatro elementos —tierra, agua, fuego y aire— otorgando armonía y protección a la relación.</p>
            </div>
            <div className="ceremony__benefits-card">
              <div className="ceremony__benefits-card-icon-container">
                <img src={iconShield} alt="Icono de escudo" className="ceremony__benefits-card-icon"/>
              </div>
              <h3 className="ceremony__benefits-card-title">
                Compromiso Consciente
              </h3>
              <p className="ceremony__benefits-card-description">
                Más allá de un contrato, esta ceremonia refuerza un compromiso del alma, basado en la voluntad libre y la elección consciente de crecer juntos.</p>
            </div>
            <div className="ceremony__benefits-card">
              <div className="ceremony__benefits-card-icon-container">
                <img src={iconUsers} alt="Icono de usuarios" className="ceremony__benefits-card-icon"/>
              </div>
              <h3 className="ceremony__benefits-card-title">
                Comunidad de Testigos
              </h3>
              <p className="ceremony__benefits-card-description">
                Sus seres queridos participan activamente como testigos sagrados, creando un círculo de apoyo y amor que sostiene la unión más allá de la ceremonia.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="ceremony__details">
        <div className="ceremony__details-container">
          <div className="ceremony__details-header">
            <span className="ceremony__details-header-span">INFORMACIÓN PRÁCTICA</span>
            <h2 className="ceremony__details-header-title">
              Todo lo que necesitas <span className="ceremony__details-header-title-accent">saber</span>
            </h2>
          </div>
          <div className="ceremony__details-grid">
            <div className="ceremony__details-item">
              <div className="ceremony__details-item-icon-container">
                <img src={iconClock} alt="Icono de reloj" className="ceremony__details-item-icon"/>
              </div>
              <div className="ceremony__details-item-info">
                <p className="ceremony__details-item-label">DURACIÓN</p>
                <p className="ceremony__details-item-value">2 — 3 horas</p>
              </div>
            </div>
            <div className="ceremony__details-item">
              <div className="ceremony__details-item-icon-container">
                <img src={iconUsers} alt="Icono de usuarios" className="ceremony__details-item-icon"/>
              </div>
              <div className="ceremony__details-item-info">
                <p className="ceremony__details-item-label">INVITADOS</p>
                <p className="ceremony__details-item-value">Hasta 30 personas</p>
              </div>
            </div>
            <div className="ceremony__details-item">
              <div className="ceremony__details-item-icon-container">
                <img src={iconMapPin} alt="Icono de ubicación" className="ceremony__details-item-icon"/>
              </div>
              <div className="ceremony__details-item-info">
                <p className="ceremony__details-item-label">UBICACIÓN</p>
                <p className="ceremony__details-item-value">Jardín sagrado o lugar elegido</p>
              </div>
            </div>
            <div className="ceremony__details-item">
              <div className="ceremony__details-item-icon-container">
                <img src={iconDroplets} alt="Icono de gotas" className="ceremony__details-item-icon"/>
              </div>
              <div className="ceremony__details-item-info">
                <p className="ceremony__details-item-label">INCLUYE</p>
                <p className="ceremony__details-item-value">Ofrendas, copal y cacao ceremonial</p>
              </div>
            </div>
            <div className="ceremony__details-item">
              <div className="ceremony__details-item-icon-container">
                <img src={iconFlame} alt="Icono de llama" className="ceremony__details-item-icon"/>
              </div>
              <div className="ceremony__details-item-info">
                <p className="ceremony__details-item-label">PREPARACIÓN</p>
                <p className="ceremony__details-item-value">Sesión previa con la pareja</p>
              </div>
            </div>
            <div className="ceremony__details-item">
              <div className="ceremony__details-item-icon-container">
                <img src={iconSun} alt="Icono de sol" className="ceremony__details-item-icon"/>
              </div>
              <div className="ceremony__details-item-info">
                <p className="ceremony__details-item-label">PERSONALIZACIÓN</p>
                <p className="ceremony__details-item-value">Ceremonia adaptada a la pareja</p>
              </div>
            </div>
          </div>
          <div className="ceremony__details-quote">
            <blockquote className="ceremony__details-quote-text">"Dos almas que se reconocen ya no necesitan buscarse, solo celebrarse"</blockquote>
            <p className="ceremony__details-quote-attribution">— Sabiduría ancestral</p>
          </div>
        </div>
      </section>
      <section className="ceremony__cta">
        <div className="ceremony__cta-container">
          <h2 className="ceremony__cta-title">
            ¿Listos para celebrar <span className="ceremony__cta-title-accent">su amor?</span>
          </h2>
          <p className="ceremony__cta-text">Permitan que su unión sea bendecida por los elementos y la energía del universo. Agenden su ceremonia personalizada de Unión de Almas.</p>
          <div className="ceremony__cta-buttons">
            <a href="#contact" className="ceremony__cta-button-main">Reservar Ceremonia</a>
            <Link to="/" className="ceremony__cta-button-secondary">Ver Todas las Ceremonias</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
