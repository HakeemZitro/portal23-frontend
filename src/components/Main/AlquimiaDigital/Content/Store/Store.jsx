import iconPlus from "../../../../../assets/icons/icon_plus.svg";

import { useState } from "react";

export default function Store({ assets, addOwnedAsset, isLoading }) {
  const [activeTab, setActiveTab] = useState("ongoing");

  return (
    <>
      <div className="app-store__top">
        <div className="app-store__header">
          <h1 className="app-store__title">Tienda de Contenido</h1>
          <div className="app-store__tabs">
            <button key="ongoing" type="button" className={`app-store__tab ${activeTab === "ongoing" ? "app-store__tab_active" : ""}`} onClick={() => setActiveTab("ongoing")}>
              Contenido
            </button>
            <button key="complete" type="button" className={`app-store__tab ${activeTab === "complete" ? "app-store__tab_active" : ""}`} onClick={() => setActiveTab("complete")}>
              Cursos
            </button>
          </div>
        </div>
      </div>
      {isLoading ? (
        <div className="app-store__loader-container">
          <div className="app-store__loader"></div>
          <p className="app-store__loader-text">Cargando contenido espiritual...</p>
        </div>
      ) : (
        <div className="app-store__grid">
          {assets.map((asset) => (
            <div key={asset.id} className={`app-store__card`} style={{ "--card-accent": asset.color }}>
              <div className="app-store__card-image-container">
                <img src={asset.image} alt={asset.title} className={asset.type === "Audio" ? "app-store__card-icon" : "app-store__card-image"} />
              </div>
              <div className="app-store__card-info">
                <h3 className="app-store__card-title">{asset.title}</h3>
                <div className="app-store__card-meta">
                  <p className="app-store__card-type">{asset.type}</p>
                  <span className="app-store__card-duration">Duración: {asset.duration}</span>
                </div>
              </div>
              <button className="app-store__play-btn" type="button" onClick={() => addOwnedAsset(asset)} aria-label="Agregar">
                <img src={iconPlus} alt="Icono de Agregar" className="app-store__play-icon" />
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
