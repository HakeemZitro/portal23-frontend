import iconShield from "../../../../assets/icons/icon_shield.svg";
import iconFeather from "../../../../assets/icons/icon_feather.svg";
import iconRotate from "../../../../assets/icons/icon_rotate.svg";
import iconDroplets from "../../../../assets/icons/icon_droplets.svg";
import iconBrain from "../../../../assets/icons/icon_brain.svg";
import iconTrees from "../../../../assets/icons/icon_trees.svg";



export default function Values() {
  return (
    <section id="values" className="values">
      <div className="values__container">
        <div className="values__header">
          <span className="values__header-span">NUESTRA FILOSOFÍA</span>
          <h2 className="values__header-title">
            Valores que nos <span className="values__header-title-accent">guían</span>
          </h2>
          <p className="values__header-description">
            Estos principios son el corazón de cada ceremonia que facilitamos y cada relación que cultivamos.
          </p>
        </div>
        <div className="values__cards">
          <div className="values__card">
            <div className="values__card-icon-container">
              <img src={iconShield} alt="Icono de escudo" className="values__card-icon" />
            </div>
            <h3 className="values__card-title">
              Espacio Seguro
            </h3>
            <p className="values__card-description">
              Creamos un contenedor sagrado donde puedes explorar tu interior sin juicio, con total confidencialidad y respeto.
            </p>
          </div>
          <div className="values__card">
            <div className="values__card-icon-container">
              <img src={iconFeather} alt="Icono de pluma" className="values__card-icon" />
            </div>
            <h3 className="values__card-title">
              Honra Ancestral
            </h3>
            <p className="values__card-description">
              Cada práctica respeta y honra las tradiciones de los pueblos originarios, manteniendo viva su sabiduría.
            </p>
          </div>
          <div className="values__card">
            <div className="values__card-icon-container">
              <img src={iconRotate} alt="Icono de rotación" className="values__card-icon" />
            </div>
            <h3 className="values__card-title">
              Transformación Genuina
            </h3>
            <p className="values__card-description">
              No buscamos experiencias superficiales. Facilitamos procesos profundos que generan cambios reales y duraderos.
            </p>
          </div>
          <div className="values__card">
            <div className="values__card-icon-container">
              <img src={iconDroplets} alt="Icono de gotas" className="values__card-icon" />
            </div>
            <h3 className="values__card-title">
              Fluir Natural
            </h3>
            <p className="values__card-description">
              Respetamos el ritmo único de cada persona. No forzamos procesos, acompañamos tu propio despertar.
            </p>
          </div>
          <div className="values__card">
            <div className="values__card-icon-container">
              <img src={iconBrain} alt="Icono de cerebro" className="values__card-icon" />
            </div>
            <h3 className="values__card-title">
              Comunidad Consciente
            </h3>
            <p className="values__card-description">
              Somos una familia de almas en camino. El apoyo mutuo y la conexión genuina son pilares de nuestra comunidad.
            </p>
          </div>
          <div className="values__card">
            <div className="values__card-icon-container">
              <img src={iconTrees} alt="Icono de árboles" className="values__card-icon" />
            </div>
            <h3 className="values__card-title">
              Conexión con la Tierra
            </h3>
            <p className="values__card-description">
              Honramos a la Pachamama en cada ceremonia. Nuestras prácticas buscan la armonía con todos los seres.
            </p>
          </div>
        </div>
        <div className="values__quote">
          <blockquote className="values__quote-text">"El viaje más largo, es el viaje hacia dentro"</blockquote>
          <p className="values__quote-attribution">— Dag Hammarskjöld</p>
        </div>
      </div>
    </section>
  );
}