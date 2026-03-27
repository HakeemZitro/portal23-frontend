import iconPlus from "../../../../../assets/icons/icon_plus.svg";

import { useState } from "react";

export default function AssetsList({ assets, addOwnedAsset, isLoading }) {
  const [activeTab, setActiveTab] = useState("ongoing");

  return (
    <>
      <div className="app-assets__top">
        <div className="app-assets__header">
          <h1 className="app-assets__title">Lista de Usuarios</h1>
          <div className="app-assets__tabs">
            <button key="ongoing" type="button" className={`app-assets__tab ${activeTab === "ongoing" ? "app-assets__tab_active" : ""}`} onClick={() => setActiveTab("ongoing")}>
              Contenido
            </button>
            <button key="complete" type="button" className={`app-assets__tab ${activeTab === "complete" ? "app-assets__tab_active" : ""}`} onClick={() => setActiveTab("complete")}>
              Cursos
            </button>
          </div>
        </div>
      </div>
      {isLoading ? (
        <div className="app-assets__loader-container">
          <div className="app-assets__loader"></div>
          <p className="app-assets__loader-text">Cargando contenido espiritual...</p>
        </div>
      ) : (
        <div className="app-assets__grid">
          {assets.map((asset) => (
            <div key={asset.id} className={`app-assets__card`} style={{ "--card-accent": asset.color }}>
              <div className="app-assets__card-image-container">
                <img src={asset.image} alt={asset.title} className={asset.type === "Audio" ? "app-assets__card-icon" : "app-assets__card-image"} />
              </div>
              <div className="app-assets__card-info">
                <h3 className="app-assets__card-title">{asset.title}</h3>
                <div className="app-assets__card-meta">
                  <p className="app-assets__card-type">{asset.type}</p>
                  <span className="app-assets__card-duration">Duración: {asset.duration}</span>
                </div>
              </div>
              <button className="app-assets__play-btn" type="button" onClick={() => addOwnedAsset(asset)} aria-label="Agregar">
                <img src={iconPlus} alt="Icono de Agregar" className="app-assets__play-icon" />
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
