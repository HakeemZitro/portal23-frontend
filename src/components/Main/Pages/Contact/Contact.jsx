import iconMail from "../../../../assets/icons/icon_mail.svg";
import iconPhone from "../../../../assets/icons/icon_phone.svg";
import iconLocation from "../../../../assets/icons/icon_map-pin.svg";
import iconFacebook from "../../../../assets/icons/icon_facebook.svg";
import iconInstagram from "../../../../assets/icons/icon_instagram.svg";
import iconWhatsapp from "../../../../assets/icons/icon_whatsapp.svg";
import iconSend from "../../../../assets/icons/icon_send.svg";


export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <div className="contact__info">
          <span className="contact__info-head">CONECTEMOS</span>
          <h2 className="contact__info-title">
            Estamos aquí para <span className="contact__info-title-accent">acompañarte</span>
          </h2>
          <p className="contact__info-description">
            ¿Tienes preguntas sobre nuestras ceremonias? ¿Quieres
            saber cuál experiencia es adecuada para ti? Escríbenos y
            con gusto te orientamos en tu camino.
          </p>
          <div className="contact__details">
            <div className="contact__detail">
              <div className="contact__detail-icon-container">
                <img src={iconMail} alt="Icono de correo" className="contact__detail-icon" />
              </div>
              <div className="contact__detail-info">
                <p className="contact__detail-label">EMAIL</p>
                <p className="contact__detail-value">contacto@raices-sagradas.com</p>
              </div>
            </div>
            <div className="contact__detail">
              <div className="contact__detail-icon-container">
                <img src={iconPhone} alt="Icono de teléfono" className="contact__detail-icon" />
              </div>
              <div className="contact__detail-info">
                <p className="contact__detail-label">TELÉFONO</p>
                <p className="contact__detail-value">+52 449 165 4434</p>
              </div>
            </div>
            <div className="contact__detail">
              <div className="contact__detail-icon-container">
                <img src={iconLocation} alt="Icono de ubicación" className="contact__detail-icon" />
              </div>
              <div className="contact__detail-info">
                <p className="contact__detail-label">UBICACIÓN</p>
                <p className="contact__detail-value">Ags., Aguascalientes</p>
              </div>
            </div>
          </div>  
          <div className="contact__socials">
            <p className="contact__socials-label">SÍGUENOS</p>
            <div className="contact__socials-icons">
              <a href="#" className="contact__socials-icon-container">
                <img src={iconFacebook} alt="Icono de Facebook" className="contact__socials-icon" />
              </a>
              <a href="#" className="contact__socials-icon-container">
                <img src={iconInstagram} alt="Icono de Instagram" className="contact__socials-icon" />
              </a>
              <a href="#" className="contact__socials-icon-container">
                <img src={iconWhatsapp} alt="Icono de WhatsApp" className="contact__socials-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="contact__form-container">
          <form className="contact__form">
            <div>
              <label className="contact__form-label">
                Tu nombre
              <input
                className="contact__form-input"
                placeholder="¿Cómo te llamas?"
                type="text"
                required
              />
              </label>
            </div>
            <div>
              <label className="contact__form-label">
                Tu email
              <input
                className="contact__form-input"
                placeholder="ejemplo@email.com"
                type="email"
                required
              />
              </label>
            </div>
            <div>
              <label className="contact__form-label">
                Tu mensaje
              <textarea
                className="contact__form-input contact__form-textarea"
                placeholder="Cuéntanos sobre tu interés en nuestras ceremonias..."
                required
                rows="4"
              ></textarea>
              </label>
            </div>
            <button className="contact__form-button" type="submit">
              <img src={iconSend} alt="Icono de enviar" className="contact__form-icon" />
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}