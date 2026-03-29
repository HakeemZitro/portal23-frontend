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
import herocoverSanacionDelLinaje from "../../../assets/images/herocover_sanacion-del-linaje.webp";

import { Link } from "react-router-dom";

export default function CeremoniaSanacionDelLinaje() {
  return (
    <div className="ceremony">
      <Link to="/" className="ceremony__back"> 
        <img src={iconChevronLeft} alt="Icono de flecha izquierda" className="ceremony__back-icon" /> Volver al Inicio 
      </Link>
      <section className="ceremony__hero">
        <img src={herocoverSanacionDelLinaje} alt="Ceremonia de Sanación del Linaje" className="ceremony__hero-background" loading="eager" />
        <div className="ceremony__hero-overlay"></div>
        <div className="ceremony__hero-content">
          <div className="ceremony__hero-decoration">
            <img src={iconSparkles} className="ceremony__hero-decoration-icon" alt="" />
            <span className="ceremony__hero-decoration-text">SANACIÓN ANCESTRAL</span>
          </div>
          <h1 className="ceremony__hero-title">
            Sanación del <span className="ceremony__hero-title-accent">Linaje</span>
          </h1>
          <p className="ceremony__hero-text">Libera las cargas heredadas de tus ancestros y sana las memorias transgeneracionales. Un viaje profundo hacia la raíz de tu árbol familiar.</p>
        </div>
      </section>
      <section className="ceremony__intro">
        <div className="ceremony__intro-container">
          <div className="ceremony__intro-image-container">
            <img src={herocoverSanacionDelLinaje} alt="Ceremonia img" className="ceremony__intro-image" />
          </div>
          <div className="ceremony__intro-info">
            <span className="ceremony__intro-info-head">MEMORIA ANCESTRAL</span>
            <h2 className="ceremony__intro-info-title">
              Sanando las raíces para <span className="ceremony__intro-info-title-accent">florecer</span>
            </h2>
            <p className="ceremony__intro-info-text">
              La ceremonia de Sanación del Linaje es un trabajo terapéutico-espiritual que reconoce que muchas de nuestras emociones, patrones y bloqueos no nos pertenecen, sino que fueron heredados de nuestros ancestros a través de la memoria celular y energética.</p>
            <p className="ceremony__intro-info-text">
              Mediante técnicas de constelaciones familiares, visualización profunda, canto sagrado y rituales de fuego, te guiamos a identificar y liberar las cargas emocionales que han viajado por generaciones en tu familia: duelos no resueltos, secretos, traumas y lealtades invisibles.</p>
            <p className="ceremony__intro-info-text">
              Al sanar las heridas de tu linaje, no solo te liberas a ti mismo, sino que abres el camino para las generaciones futuras. Es un acto de amor que trasciende el tiempo.</p>
          </div>
        </div>
      </section>
      <section className="ceremony__benefits">
        <div className="ceremony__benefits-container">
          <div className="ceremony__benefits-header">
            <span className="ceremony__benefits-header-span">BENEFICIOS</span>
            <h2 className="ceremony__benefits-header-title">
              Lo que la sanación del linaje <span className="ceremony__benefits-header-title-accent">te ofrece</span>
            </h2>
          </div>
          <div className="ceremony__benefits-cards">
            <div className="ceremony__benefits-card">
              <div className="ceremony__benefits-card-icon-container">
                <img src={iconHeart} alt="Icono de corazón" className="ceremony__benefits-card-icon"/>
              </div>
              <h3 className="ceremony__benefits-card-title">
                Liberación de Cargas Heredadas
              </h3>
              <p className="ceremony__benefits-card-description">
                Identifica y libera patrones emocionales, creencias limitantes y traumas que han sido transmitidos inconscientemente a través de tu árbol genealógico.</p>
            </div>
            <div className="ceremony__benefits-card">
              <div className="ceremony__benefits-card-icon-container">
                <img src={iconSun} alt="Icono de sol" className="ceremony__benefits-card-icon"/>
              </div>
              <h3 className="ceremony__benefits-card-title">
                Comprensión Profunda
              </h3>
              <p className="ceremony__benefits-card-description">
                Entiende el origen de tus comportamientos repetitivos y reacciones automáticas al descubrir las dinámicas ocultas de tu sistema familiar.</p>
            </div>
            <div className="ceremony__benefits-card">
              <div className="ceremony__benefits-card-icon-container">
                <img src={iconFeather} alt="Icono de pluma" className="ceremony__benefits-card-icon"/>
              </div>
              <h3 className="ceremony__benefits-card-title">
                Paz con el Pasado
              </h3>
              <p className="ceremony__benefits-card-description">
                Reconcíliate con la historia de tu familia, honrando el camino de tus ancestros sin cargar con su dolor, encontrando paz y aceptación.</p>
            </div>
            <div className="ceremony__benefits-card">
              <div className="ceremony__benefits-card-icon-container">
                <img src={iconMoon} alt="Icono de luna" className="ceremony__benefits-card-icon"/>
              </div>
              <h3 className="ceremony__benefits-card-title">
                Reconexión con tus Raíces
              </h3>
              <p className="ceremony__benefits-card-description">
                Restablece el vínculo sagrado con tus antepasados, accediendo a la fuerza, sabiduría y bendiciones que tu linaje tiene para ofrecerte.</p>
            </div>
            <div className="ceremony__benefits-card">
              <div className="ceremony__benefits-card-icon-container">
                <img src={iconShield} alt="Icono de escudo" className="ceremony__benefits-card-icon"/>
              </div>
              <h3 className="ceremony__benefits-card-title">
                Protección Energética
              </h3>
              <p className="ceremony__benefits-card-description">
                Al cortar los lazos con las memorias de dolor, estableces límites energéticos saludables que te protegen de repetir ciclos familiares dañinos.</p>
            </div>
            <div className="ceremony__benefits-card">
              <div className="ceremony__benefits-card-icon-container">
                <img src={iconUsers} alt="Icono de usuarios" className="ceremony__benefits-card-icon"/>
              </div>
              <h3 className="ceremony__benefits-card-title">
                Legado Transformado
              </h3>
              <p className="ceremony__benefits-card-description">
                Tu sanación impacta a todo tu sistema familiar. Al liberarte, abres el camino para que las nuevas generaciones nazcan libres de esas cargas.</p>
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
                <p className="ceremony__details-item-value">4 — 5 horas</p>
              </div>
            </div>
            <div className="ceremony__details-item">
              <div className="ceremony__details-item-icon-container">
                <img src={iconUsers} alt="Icono de usuarios" className="ceremony__details-item-icon"/>
              </div>
              <div className="ceremony__details-item-info">
                <p className="ceremony__details-item-label">GRUPO</p>
                <p className="ceremony__details-item-value">Máximo 10 personas</p>
              </div>
            </div>
            <div className="ceremony__details-item">
              <div className="ceremony__details-item-icon-container">
                <img src={iconMapPin} alt="Icono de ubicación" className="ceremony__details-item-icon"/>
              </div>
              <div className="ceremony__details-item-info">
                <p className="ceremony__details-item-label">UBICACIÓN</p>
                <p className="ceremony__details-item-value">Espacio ceremonial, Ags.</p>
              </div>
            </div>
            <div className="ceremony__details-item">
              <div className="ceremony__details-item-icon-container">
                <img src={iconDroplets} alt="Icono de gotas" className="ceremony__details-item-icon"/>
              </div>
              <div className="ceremony__details-item-info">
                <p className="ceremony__details-item-label">INCLUYE</p>
                <p className="ceremony__details-item-value">Ritual de fuego y material simbólico</p>
              </div>
            </div>
            <div className="ceremony__details-item">
              <div className="ceremony__details-item-icon-container">
                <img src={iconFlame} alt="Icono de llama" className="ceremony__details-item-icon"/>
              </div>
              <div className="ceremony__details-item-info">
                <p className="ceremony__details-item-label">PREPARACIÓN</p>
                <p className="ceremony__details-item-value">Traer foto o nombre de ancestros</p>
              </div>
            </div>
            <div className="ceremony__details-item">
              <div className="ceremony__details-item-icon-container">
                <img src={iconSun} alt="Icono de sol" className="ceremony__details-item-icon"/>
              </div>
              <div className="ceremony__details-item-info">
                <p className="ceremony__details-item-label">FRECUENCIA</p>
                <p className="ceremony__details-item-value">Ceremonias bimestrales</p>
              </div>
            </div>
          </div>
          <div className="ceremony__details-quote">
            <blockquote className="ceremony__details-quote-text">"Si no sanamos lo que nos duele, terminaremos heredándolo"</blockquote>
            <p className="ceremony__details-quote-attribution">— Sabiduría ancestral</p>
          </div>
        </div>
      </section>
      <section className="ceremony__cta">
        <div className="ceremony__cta-container">
          <h2 className="ceremony__cta-title">
            ¿Listo para sanar <span className="ceremony__cta-title-accent">tu linaje?</span>
          </h2>
          <p className="ceremony__cta-text">Reserva tu lugar en nuestra próxima ceremonia de Sanación del Linaje y libera las cargas que no te pertenecen para vivir en plenitud.</p>
          <div className="ceremony__cta-buttons">
            <a href="#contact" className="ceremony__cta-button-main">Reservar Ceremonia</a>
            <Link to="/" className="ceremony__cta-button-secondary">Ver Todas las Ceremonias</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
