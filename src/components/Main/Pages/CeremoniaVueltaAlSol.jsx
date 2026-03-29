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
import herocoverVueltaAlSol from "../../../assets/images/herocover_vuelta-al-sol.webp";

import { Link } from "react-router-dom";

export default function CeremoniaVueltaAlSol() {
  return (
    <div className="ceremony">
      <Link to="/" className="ceremony__back"> 
        <img src={iconChevronLeft} alt="Icono de flecha izquierda" className="ceremony__back-icon" /> Volver al Inicio 
      </Link>
      <section className="ceremony__hero">
        <img src={herocoverVueltaAlSol} alt="Ceremonia de Vuelta al Sol" className="ceremony__hero-background" loading="eager" />
        <div className="ceremony__hero-overlay"></div>
        <div className="ceremony__hero-content">
          <div className="ceremony__hero-decoration">
            <img src={iconSparkles} className="ceremony__hero-decoration-icon" alt="" />
            <span className="ceremony__hero-decoration-text">CELEBRACIÓN SOLAR</span>
          </div>
          <h1 className="ceremony__hero-title">
            Vuelta al <span className="ceremony__hero-title-accent">Sol</span>
          </h1>
          <p className="ceremony__hero-text">Celebra un nuevo ciclo de vida con una ceremonia de cumpleaños consciente. Honra tu camino recorrido y siembra intenciones para la vuelta que comienza.</p>
        </div>
      </section>
      <section className="ceremony__intro">
        <div className="ceremony__intro-container">
          <div className="ceremony__intro-image-container">
            <img src={herocoverVueltaAlSol} alt="Ceremonia img" className="ceremony__intro-image" />
          </div>
          <div className="ceremony__intro-info">
            <span className="ceremony__intro-info-head">RENACIMIENTO CÍCLICO</span>
            <h2 className="ceremony__intro-info-title">
              Celebra cada giro alrededor <span className="ceremony__intro-info-title-accent">del sol</span>
            </h2>
            <p className="ceremony__intro-info-text">
              La Vuelta al Sol es una ceremonia de cumpleaños consciente inspirada en las tradiciones ancestrales que celebraban cada año de vida como un ciclo completo de aprendizaje y transformación. En lugar de una fiesta convencional, ofrecemos un espacio sagrado para honrar tu existencia.</p>
            <p className="ceremony__intro-info-text">
              Durante la ceremonia, hacemos un recorrido simbólico por los momentos más significativos del ciclo que termina: las lecciones aprendidas, los desafíos superados, las personas que llegaron y las que partieron. Es un momento de gratitud profunda y consciencia plena.</p>
            <p className="ceremony__intro-info-text">
              Cerramos con un ritual de intenciones donde siembras las semillas de lo que deseas manifestar en tu nuevo ciclo solar, acompañado de la energía y bendiciones de quienes te rodean.</p>
          </div>
        </div>
      </section>
      <section className="ceremony__benefits">
        <div className="ceremony__benefits-container">
          <div className="ceremony__benefits-header">
            <span className="ceremony__benefits-header-span">BENEFICIOS</span>
            <h2 className="ceremony__benefits-header-title">
              Lo que tu vuelta al sol <span className="ceremony__benefits-header-title-accent">te regala</span>
            </h2>
          </div>
          <div className="ceremony__benefits-cards">
            <div className="ceremony__benefits-card">
              <div className="ceremony__benefits-card-icon-container">
                <img src={iconHeart} alt="Icono de corazón" className="ceremony__benefits-card-icon"/>
              </div>
              <h3 className="ceremony__benefits-card-title">
                Gratitud Profunda
              </h3>
              <p className="ceremony__benefits-card-description">
                Revive y agradece cada experiencia del ciclo que culmina, transformando incluso los momentos difíciles en fuentes de sabiduría y fortaleza personal.</p>
            </div>
            <div className="ceremony__benefits-card">
              <div className="ceremony__benefits-card-icon-container">
                <img src={iconSun} alt="Icono de sol" className="ceremony__benefits-card-icon"/>
              </div>
              <h3 className="ceremony__benefits-card-title">
                Claridad de Propósito
              </h3>
              <p className="ceremony__benefits-card-description">
                Establece intenciones claras y poderosas para tu nuevo ciclo solar, alineando tus deseos con tu propósito de vida de manera consciente y significativa.</p>
            </div>
            <div className="ceremony__benefits-card">
              <div className="ceremony__benefits-card-icon-container">
                <img src={iconFeather} alt="Icono de pluma" className="ceremony__benefits-card-icon"/>
              </div>
              <h3 className="ceremony__benefits-card-title">
                Soltar lo Vivido
              </h3>
              <p className="ceremony__benefits-card-description">
                Libera con amor todo lo que ya cumplió su propósito: relaciones, hábitos, creencias y apegos que ya no resuenan con quien estás siendo ahora.</p>
            </div>
            <div className="ceremony__benefits-card">
              <div className="ceremony__benefits-card-icon-container">
                <img src={iconMoon} alt="Icono de luna" className="ceremony__benefits-card-icon"/>
              </div>
              <h3 className="ceremony__benefits-card-title">
                Conexión Cósmica
              </h3>
              <p className="ceremony__benefits-card-description">
                Reconéctate con los ciclos naturales del universo, comprendiendo que tu vida es parte de un movimiento cósmico perfecto de expansión y evolución.</p>
            </div>
            <div className="ceremony__benefits-card">
              <div className="ceremony__benefits-card-icon-container">
                <img src={iconShield} alt="Icono de escudo" className="ceremony__benefits-card-icon"/>
              </div>
              <h3 className="ceremony__benefits-card-title">
                Renovación Interior
              </h3>
              <p className="ceremony__benefits-card-description">
                Experimenta una sensación de renovación profunda al cerrar conscientemente un ciclo y abrir otro con energía fresca, intención clara y corazón abierto.</p>
            </div>
            <div className="ceremony__benefits-card">
              <div className="ceremony__benefits-card-icon-container">
                <img src={iconUsers} alt="Icono de usuarios" className="ceremony__benefits-card-icon"/>
              </div>
              <h3 className="ceremony__benefits-card-title">
                Círculo de Amor
              </h3>
              <p className="ceremony__benefits-card-description">
                Tus seres queridos participan activamente ofreciéndote palabras de poder, bendiciones y deseos que potencian la energía de tu nuevo comienzo.</p>
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
                <p className="ceremony__details-item-value">Hasta 25 personas</p>
              </div>
            </div>
            <div className="ceremony__details-item">
              <div className="ceremony__details-item-icon-container">
                <img src={iconMapPin} alt="Icono de ubicación" className="ceremony__details-item-icon"/>
              </div>
              <div className="ceremony__details-item-info">
                <p className="ceremony__details-item-label">UBICACIÓN</p>
                <p className="ceremony__details-item-value">Espacio elegido o jardín sagrado</p>
              </div>
            </div>
            <div className="ceremony__details-item">
              <div className="ceremony__details-item-icon-container">
                <img src={iconDroplets} alt="Icono de gotas" className="ceremony__details-item-icon"/>
              </div>
              <div className="ceremony__details-item-info">
                <p className="ceremony__details-item-label">INCLUYE</p>
                <p className="ceremony__details-item-value">Velas, ofrenda y ritual de fuego</p>
              </div>
            </div>
            <div className="ceremony__details-item">
              <div className="ceremony__details-item-icon-container">
                <img src={iconFlame} alt="Icono de llama" className="ceremony__details-item-icon"/>
              </div>
              <div className="ceremony__details-item-info">
                <p className="ceremony__details-item-label">PREPARACIÓN</p>
                <p className="ceremony__details-item-value">Reflexión previa sobre el ciclo</p>
              </div>
            </div>
            <div className="ceremony__details-item">
              <div className="ceremony__details-item-icon-container">
                <img src={iconSun} alt="Icono de sol" className="ceremony__details-item-icon"/>
              </div>
              <div className="ceremony__details-item-info">
                <p className="ceremony__details-item-label">PERSONALIZACIÓN</p>
                <p className="ceremony__details-item-value">Ceremonia adaptada a tu historia</p>
              </div>
            </div>
          </div>
          <div className="ceremony__details-quote">
            <blockquote className="ceremony__details-quote-text">"Cada vuelta al sol es una oportunidad de renacer siendo más tú"</blockquote>
            <p className="ceremony__details-quote-attribution">— Sabiduría ancestral</p>
          </div>
        </div>
      </section>
      <section className="ceremony__cta">
        <div className="ceremony__cta-container">
          <h2 className="ceremony__cta-title">
            ¿Listo para celebrar <span className="ceremony__cta-title-accent">tu nuevo ciclo?</span>
          </h2>
          <p className="ceremony__cta-text">Haz de tu próximo cumpleaños una experiencia trascendental. Reserva tu ceremonia de Vuelta al Sol y comienza un nuevo ciclo con intención y gratitud.</p>
          <div className="ceremony__cta-buttons">
            <a href="#contact" className="ceremony__cta-button-main">Reservar Ceremonia</a>
            <Link to="/" className="ceremony__cta-button-secondary">Ver Todas las Ceremonias</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
