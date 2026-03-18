import iconQuote from "../../../../assets/icons/icon_quote.svg";
import iconChevronLeft from "../../../../assets/icons/icon_chevron-left.svg";
import iconChevronRight from "../../../../assets/icons/icon_chevron-right.svg";


export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials__overlay"></div>
      <div className="testimonials__container">
        <div className="testimonials__header">
          <span className="testimonials__header-span">TESTIMONIOS</span>
          <h2 className="testimonials__header-title">
            Voces de nuestra <span className="testimonials__header-title-accent">comunidad</span>
          </h2>
        </div>
        <div className="testimonies__card">
          <img src={iconQuote} alt="Icono de comillas" className="testimonies__card-icon" />
          <p className="testimonies__card-experience">
            "La ceremonia de cacao fue un antes y un después en mi
            vida. El amor y la profesionalidad con la que guían cada
            momento te hace sentir completamente segura para explorar
            tu interior."
          </p>
          <div className="testimonials__card-user">
            <img src="" alt="María Elena" className="testimonials__card-avatar" />
            <div className="testimonials__card-info">
              <p className="testimonials__card-name">María Elena</p>
              <p className="testimonials__card-ceremony">Participante de Ceremonia de Cacao</p>
            </div>
          </div>
        </div>
        <div className="testimonials__buttons">
          <button className="testimonials__left-button">
            <img src={iconChevronLeft} alt="Icono de flecha izquierda" className="testimonials__left-button-icon" />
          </button>
          <button className="testimonials__right-button">
            <img src={iconChevronRight} alt="Icono de flecha derecha" className="testimonials__right-button-icon" />
          </button>
        </div>
      </div>
    </section>
  );
}