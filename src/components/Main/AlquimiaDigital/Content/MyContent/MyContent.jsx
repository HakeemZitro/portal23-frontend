import iconPlay from "../../../../../assets/icons/icon_play.svg";
import logo from "../../../../../assets/images/logo_color.jpg";

import { useState } from "react";
import MuxPlayer from "@mux/mux-player-react";

export default function MyContent({ ownedAssets }) {
  const [activeTab, setActiveTab] = useState("ongoing");
  const [selectedAsset, setSelectedAsset] = useState(ownedAssets[0]);

  return (
    <>
      <div className="app-mycontent__top">
        <div className="app-mycontent__header">
          <h1 className="app-mycontent__title">Mi Contenido</h1>
          <div className="app-mycontent__tabs">
            <button key="ongoing" type="button" className={`app-mycontent__tab ${activeTab === "ongoing" ? "app-mycontent__tab_active" : ""}`} onClick={() => setActiveTab("ongoing")}>
              En progreso
            </button>
            <button key="complete" type="button" className={`app-mycontent__tab ${activeTab === "complete" ? "app-mycontent__tab_active" : ""}`} onClick={() => setActiveTab("complete")}>
              Completados
            </button>
          </div>
        </div>
        <div className="app-mycontent__player">
          {selectedAsset === undefined ? (
            <h2 className="app-mycontent__player-title">Agrega contenido desde la tienda para comenzar</h2>
            ) : (
            <MuxPlayer 
              className="app-mycontent__player-video" 
              playbackId={selectedAsset.playback_id} 
              title={selectedAsset.title}
              accentColor="#D4A853"
              metadata={{ video_title: selectedAsset.title }} 
              poster={logo}
            />
          )}
        </div>
      </div>
      {selectedAsset !== undefined && (
        <div className="app-mycontent__grid">
          {ownedAssets.map((asset) => (
            <div key={asset.id} className={`app-mycontent__card ${selectedAsset.id === asset.id ? "app-mycontent__card_active" : ""}`} style={{ "--card-accent": asset.color }}>
              <div className="app-mycontent__card-image-container">
                <img src={asset.image} alt={asset.title} className={asset.type === "Audio" ? "app-mycontent__card-icon" : "app-mycontent__card-image"} />
              </div>
              <div className="app-mycontent__card-info">
                <h3 className="app-mycontent__card-title">{asset.title}</h3>
                <div className="app-mycontent__card-meta">
                  <p className="app-mycontent__card-type">{asset.type}</p>
                  <span className="app-mycontent__card-duration">Duración: {asset.duration}</span>
                </div>
              </div>
              <button className="app-mycontent__play-btn" type="button" onClick={() => setSelectedAsset(asset)} aria-label="Reproducir">
                <img src={iconPlay} alt="Icono de Play" className="app-mycontent__play-icon" />
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
