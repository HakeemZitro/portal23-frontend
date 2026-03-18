import iconSprout from "../../../../assets/icons/icon_sprout.svg";
import iconSun from "../../../../assets/icons/icon_sun.svg";
import iconHeart from "../../../../assets/icons/icon_heart.svg";
import iconGitFork from "../../../../assets/icons/icon_git-fork.svg";
import ceremonyCacao from "../../../../assets/images/ceremony_cacao.webp";
import ceremonySun from "../../../../assets/images/ceremony_vuelta-al-sol.webp";
import ceremonyUnion from "../../../../assets/images/ceremony_union-de-almas.webp";
import ceremonyLineage from "../../../../assets/images/ceremony_sanacion-del-linaje.webp";

import { Link } from "react-router-dom";

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="services__container">
        <div className="services__header">
          <span className="services__header-span">NUESTRAS CEREMONIAS</span>
          <h2 className="services__header-title">
            Experiencias que <span className="services__header-title-accent">transforman</span>
          </h2>
          <p className="services__header-description">
            Cada ceremonia es una puerta hacia tu interior. Elige el camino que resuena con tu alma en este momento.
          </p>
        </div>
        <div className="services__cards">
          <div className="services__card">
            <div className="services__card-image-container">
              <img src={ceremonyCacao} alt="Ceremonia de Cacao" className="services__card-image" loading="lazy" />
            </div>
            <div className="services__card-info">
              <div className="services__card-head">
                <h3 className="services__card-title">Ceremonia de Cacao</h3>
                <img src={iconSprout} alt="Icono de una brote" className="services__card-icon" />
              </div>
              <p className="services__card-description">Un ritual de apertura del corazón utilizando cacao sagrado para conectar con tus emociones profundas.</p>
              <Link to="/ceremonia-del-cacao" className="services__card-button">CONOCER MÁS →</Link>
            </div>
          </div>
          <div className="services__card">
            <div className="services__card-image-container">
              <img src={ceremonySun} alt="Ceremonia de Vuelta al Sol" className="services__card-image" loading="lazy" />
            </div>
            <div className="services__card-info">
              <div className="services__card-head">
                <h3 className="services__card-title">Vuelta al Sol</h3>
                <img src={iconSun} alt="Icono de un sol" className="services__card-icon" />
              </div>
              <p className="services__card-description">Un ritual de renovación personal que honra tu viaje y abre caminos para el próximo ciclo.</p>
              <Link to="/vuelta-al-sol" className="services__card-button">CONOCER MÁS →</Link>
            </div>
          </div>
          <div className="services__card">
            <div className="services__card-image-container">
              <img src={ceremonyUnion} alt="Ceremonia de Unión de Almas" className="services__card-image" loading="lazy" />
            </div>
            <div className="services__card-info">
              <div className="services__card-head">
                <h3 className="services__card-title">Unión de Almas</h3>
                <img src={iconHeart} alt="Icono de un corazón" className="services__card-icon" />
              </div>
              <p className="services__card-description">Un ritual sagrado para honrar y celebrar el amor profundo entre dos personas.</p>
              <Link to="/union-de-almas" className="services__card-button">CONOCER MÁS →</Link>
            </div>
          </div>
          <div className="services__card">
            <div className="services__card-image-container">
              <img src={ceremonyLineage} alt="Ceremonia de Sanación del Linaje" className="services__card-image" loading="lazy" />
            </div>
            <div className="services__card-info">
              <div className="services__card-head">
                <h3 className="services__card-title">Sanación del Linaje</h3>
                <img src={iconGitFork} alt="Icono de un linaje" className="services__card-icon" />
              </div>
              <p className="services__card-description">Un ritual profundo para sanar heridas ancestrales y honrar a tus antepasados.</p>
              <Link to="/sanacion-del-linaje" className="services__card-button">CONOCER MÁS →</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}