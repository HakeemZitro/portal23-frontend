import MuxUploader from "@mux/mux-uploader-react";
import { useState } from "react";
import { api } from "../../../../../utils/Api.js";

const UploadAsset = () => {
  const [uploadUrl, setUploadUrl] = useState(null);
  const [title, setTitle] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateLink = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    setIsGenerating(true);
    api.createUploadAssetURL({ title })
      .then((data) => setUploadUrl(data.upload_url))
      .catch((err) => console.log(err))
      .finally(() => setIsGenerating(false));
  };

  return (
    <div className="app-upload__container">
      {uploadUrl ? (
        <MuxUploader endpoint={uploadUrl} className="app-upload__mux" />
      ) : (
        <form className="app-upload__form" onSubmit={handleGenerateLink}>
          <h2 className="app-upload__title">Cargar Nuevo Contenido</h2>
          <label className="app-upload__label">
            Nombre del asset:
            <input 
              type="text" 
              className="app-upload__input"
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              placeholder="Ej: Módulo 1: Introducción"
              required
            />
          </label>
          <button 
            type="submit" 
            className="app-upload__submit"
            disabled={isGenerating || !title.trim()}
          >
            {isGenerating ? "Generando sesión de subida..." : "Generar sesión de subida"}
          </button>
        </form>
      )}
    </div>
  );
};

export default UploadAsset;