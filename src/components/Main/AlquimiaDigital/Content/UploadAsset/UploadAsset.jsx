import MuxUploader from "@mux/mux-uploader-react";
import { useState, useEffect } from "react";
import { api } from "../../../../../utils/Api.js";


const UploadAsset = () => {
  const [uploadUrl, setUploadUrl] = useState(null);

  useEffect(() => {
    api.createUploadAssetURL()
      .then((data) => setUploadUrl(data.upload_url))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="app-upload__container">
      {uploadUrl ? (
        <MuxUploader endpoint={uploadUrl} />
      ) : (
        <p>Generando enlace de subida...</p>
      )}
    </div>
  );
};

export default UploadAsset;