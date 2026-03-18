import introProfile from "../../../../assets/images/intro_profile.webp"
import introBackground from "../../../../assets/images/intro_background.webp"
import iconTent from "../../../../assets/icons/icon_tent.svg"
import iconUser from "../../../../assets/icons/icon_user.svg"
import iconCalendar from "../../../../assets/icons/icon_calendar.svg"



export default function Hero() {
  return (
    <section id="intro" className="intro">
      <div className="intro__container">
        <div className="intro__images">
          <img src={introBackground} className="intro__image intro__image-first" alt="Meditación y conexión espiritual en ceremonia de Portal 23" loading="lazy" />
          <img src={introProfile} className="intro__image intro__image-second" alt="Maestra de ceremonias holísticas" loading="lazy" />
        </div>
        <div className="intro__info">
          <span className="intro__info-head">NUESTRA ESENCIA</span>
          <h2 className="intro__info-title">Un espacio para <span className="intro__info-title-accent">reconectar</span></h2>
          <p className="intro__info-text">
            En Portal 23, honramos las tradiciones ancestrales mientras creamos experiencias transformadoras para el mundo moderno. Cada ceremonia es un viaje único hacia tu interior, guiado con amor, respeto y profunda intención.
          </p>
          <p className="intro__info-text">
            La Maestra de Ceremonias combina sabiduría ancestral con técnicas contemporáneas, creando un puente entre lo antiguo y lo nuevo.
          </p>
          <div className="intro__info-stats">
            <div className="intro__stat">
              <img src={iconTent} className="intro__stat-icon" alt="Icono de Sol" loading="lazy" />
              <p className="intro__stat-text-accent">50+</p>
              <p className="intro__stat-text">Ceremonias</p>
            </div>
            <div className="intro__stat">
              <img src={iconUser} className="intro__stat-icon" alt="Icono de Corazón" loading="lazy" />
              <p className="intro__stat-text-accent">250+</p>
              <p className="intro__stat-text">Asistentes</p>
            </div>
            <div className="intro__stat">
              <img src={iconCalendar} className="intro__stat-icon" alt="Icono de Luna" loading="lazy" />
              <p className="intro__stat-text-accent">1+</p>
              <p className="intro__stat-text">Año</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}