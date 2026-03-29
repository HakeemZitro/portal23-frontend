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
import herocoverCacao from "../../../assets/images/herocover_cacao.webp";

import { Link } from "react-router-dom";

export default function CeremoniaCacao() {
  return (
    <div className="ceremony">
      <Link to="/" className="ceremony__back"> 
        <img src={iconChevronLeft} alt="Icono de flecha izquierda" className="ceremony__back-icon" /> Volver al Inicio 
      </Link>
      <section className="ceremony__hero">
        <img src={herocoverCacao} alt="Ceremonia de Cacao" className="ceremony__hero-background" loading="eager" />
        <div className="ceremony__hero-overlay"></div>
        <div className="ceremony__hero-content">
          <div className="ceremony__hero-decoration">
            <img src={iconSparkles} className="ceremony__hero-decoration-icon" alt="" />
            <span className="ceremony__hero-decoration-text">CEREMONIA SAGRADA</span>
          </div>
          <h1 className="ceremony__hero-title">
            Ceremonia de <span className="ceremony__hero-title-accent">Cacao</span>
          </h1>
          <p className="ceremony__hero-text">Abre las puertas de tu corazón con el alimento sagrado de los dioses. Una experiencia íntima de conexión profunda y sanación emocional.</p>
        </div>
      </section>
      <section className="ceremony__intro">
        <div className="ceremony__intro-container">
          <div className="ceremony__intro-image-container">
            <img src={herocoverCacao} alt="Ceremonia img" className="ceremony__intro-image" />
          </div>
          <div className="ceremony__intro-info">
            <span className="ceremony__intro-info-head">EL ALIMENTO DE LOS DIOSES</span>
            <h2 className="ceremony__intro-info-title">
              Una medicina para <span className="ceremony__intro-info-title-accent">el corazón</span>
            </h2>
            <p className="ceremony__intro-info-text">
              El cacao ceremonial ha sido utilizado durante miles de años por las culturas mesoamericanas como una medicina sagrada del corazón. A diferencia del cacao comercial, el cacao ceremonial mantiene todas sus propiedades psicoactivas y espirituales intactas.</p>
            <p className="ceremony__intro-info-text">
              En nuestra ceremonia, te guiamos a través de un viaje interior donde el cacao actúa como facilitador, abriendo el centro del corazón y permitiéndote acceder a emociones profundas, liberar bloqueos y reconectar con tu esencia más auténtica.</p>
            <p className="ceremony__intro-info-text">
              Cada sesión incluye meditación guiada, trabajo de respiración, música en vivo y un espacio seguro para compartir y procesar las experiencias que surjan.</p>
          </div>
        </div>
      </section>
      <section className="ceremony__benefits">
        <div className="ceremony__benefits-container">
          <div className="ceremony__benefits-header">
            <span className="ceremony__benefits-header-span">BENEFICIOS</span>
            <h2 className="ceremony__benefits-header-title">
              Lo que el cacao <span className="ceremony__benefits-header-title-accent">te ofrece</span>
            </h2>
          </div>
          <div className="ceremony__benefits-cards">
            <div className="ceremony__benefits-card">
              <div className="ceremony__benefits-card-icon-container">
                <img src={iconHeart} alt="Icono de corazón" className="ceremony__benefits-card-icon"/>
              </div>
              <h3 className="ceremony__benefits-card-title">
                Apertura del Corazón
              </h3>
              <p className="ceremony__benefits-card-description">
                El cacao contiene teobromina, un compuesto que dilata los vasos sanguíneos y literalmente abre el corazón facilitando la conexión emocional profunda.</p>
            </div>
            <div className="ceremony__benefits-card">
              <div className="ceremony__benefits-card-icon-container">
                <img src={iconSun} alt="Icono de sol" className="ceremony__benefits-card-icon"/>
              </div>
              <h3 className="ceremony__benefits-card-title">
                Claridad Mental
              </h3>
              <p className="ceremony__benefits-card-description">
                Las propiedades del cacao puro estimulan la producción de serotonina y dopamina, promoviendo estados de claridad, enfoque y bienestar.</p>
            </div>
            <div className="ceremony__benefits-card">
              <div className="ceremony__benefits-card-icon-container">
                <img src={iconFeather} alt="Icono de pluma" className="ceremony__benefits-card-icon"/>
              </div>
              <h3 className="ceremony__benefits-card-title">
                Liberación Emocional
              </h3>
              <p className="ceremony__benefits-card-description">
                El espacio ceremonial permite la expresión segura de emociones represadas, facilitando la sanación de heridas emocionales antiguas.</p>
            </div>
            <div className="ceremony__benefits-card">
              <div className="ceremony__benefits-card-icon-container">
                <img src={iconMoon} alt="Icono de luna" className="ceremony__benefits-card-icon"/>
              </div>
              <h3 className="ceremony__benefits-card-title">
                Conexión Espiritual
              </h3>
              <p className="ceremony__benefits-card-description">
                El cacao ha sido considerado una planta maestra que facilita el acceso a estados expandidos de consciencia y conexión con lo sagrado.</p>
            </div>
            <div className="ceremony__benefits-card">
              <div className="ceremony__benefits-card-icon-container">
                <img src={iconShield} alt="Icono de escudo" className="ceremony__benefits-card-icon"/>
              </div>
              <h3 className="ceremony__benefits-card-title">
                Fortaleza Interior
              </h3>
              <p className="ceremony__benefits-card-description">
                A través del trabajo con cacao, desarrollas mayor resiliencia emocional y una conexión más profunda con tu fortaleza interior.</p>
            </div>
            <div className="ceremony__benefits-card">
              <div className="ceremony__benefits-card-icon-container">
                <img src={iconUsers} alt="Icono de usuarios" className="ceremony__benefits-card-icon"/>
              </div>
              <h3 className="ceremony__benefits-card-title">
                Comunidad Consciente
              </h3>
              <p className="ceremony__benefits-card-description">
                Compartir la ceremonia en grupo genera lazos profundos de empatía y pertenencia, creando una red de apoyo entre participantes.</p>
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
                <p className="ceremony__details-item-value">3 — 4 horas</p>
              </div>
            </div>
            <div className="ceremony__details-item">
              <div className="ceremony__details-item-icon-container">
                <img src={iconUsers} alt="Icono de usuarios" className="ceremony__details-item-icon"/>
              </div>
              <div className="ceremony__details-item-info">
                <p className="ceremony__details-item-label">GRUPO</p>
                <p className="ceremony__details-item-value">Máximo 15 personas</p>
              </div>
            </div>
            <div className="ceremony__details-item">
              <div className="ceremony__details-item-icon-container">
                <img src={iconMapPin} alt="Icono de ubicación" className="ceremony__details-item-icon"/>
              </div>
              <div className="ceremony__details-item-info">
                <p className="ceremony__details-item-label">UBICACIÓN</p>
                <p className="ceremony__details-item-value">Aguascalientes, Ags.</p>
              </div>
            </div>
            <div className="ceremony__details-item">
              <div className="ceremony__details-item-icon-container">
                <img src={iconDroplets} alt="Icono de gotas" className="ceremony__details-item-icon"/>
              </div>
              <div className="ceremony__details-item-info">
                <p className="ceremony__details-item-label">INCLUYE</p>
                <p className="ceremony__details-item-value">Cacao ceremonial grado ceremonial</p>
              </div>
            </div>
            <div className="ceremony__details-item">
              <div className="ceremony__details-item-icon-container">
                <img src={iconFlame} alt="Icono de llama" className="ceremony__details-item-icon"/>
              </div>
              <div className="ceremony__details-item-info">
                <p className="ceremony__details-item-label">PREPARACIÓN</p>
                <p className="ceremony__details-item-value">Dieta ligera previa recomendada</p>
              </div>
            </div>
            <div className="ceremony__details-item">
              <div className="ceremony__details-item-icon-container">
                <img src={iconSun} alt="Icono de sol" className="ceremony__details-item-icon"/>
              </div>
              <div className="ceremony__details-item-info">
                <p className="ceremony__details-item-label">FRECUENCIA</p>
                <p className="ceremony__details-item-value">Ceremonias mensuales</p>
              </div>
            </div>
          </div>
          <div className="ceremony__details-quote">
            <blockquote className="ceremony__details-quote-text">"El cacao no te lleva a donde tú quieres ir, te lleva a donde necesitas ir"</blockquote>
            <p className="ceremony__details-quote-attribution">— Sabiduría ancestral maya</p>
          </div>
        </div>
      </section>
      <section className="ceremony__cta">
        <div className="ceremony__cta-container">
          <h2 className="ceremony__cta-title">
            ¿Listo para abrir <span className="ceremony__cta-title-accent">tu corazón?</span>
          </h2>
          <p className="ceremony__cta-text">Reserva tu lugar en nuestra próxima ceremonia de cacao y permite que esta medicina ancestral te guíe hacia tu interior.</p>
          <div className="ceremony__cta-buttons">
            <a href="#contact" className="ceremony__cta-button-main">Reservar Ceremonia</a>
            <Link to="/" className="ceremony__cta-button-secondary">Ver Todas las Ceremonias</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
