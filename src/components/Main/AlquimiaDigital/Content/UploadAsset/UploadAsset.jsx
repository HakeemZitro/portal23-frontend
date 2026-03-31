import MuxUploader from "@mux/mux-uploader-react";
import { useState, useEffect } from "react";
import { api } from "../../../../../utils/Api.js";


const UploadAsset = () => {
  const [uploadUrl, setUploadUrl] = useState(null);

  useEffect(() => {
    api.createUploadAssetURL()
      .then((data) => setUploadUrl(data.url))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="app-upload__container">
      <MuxUploader endpoint={uploadUrl} />
    </div>
  );
};

export default UploadAsset;