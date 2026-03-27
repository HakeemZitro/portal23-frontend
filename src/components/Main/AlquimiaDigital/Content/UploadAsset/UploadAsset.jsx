import MuxUploader from "@mux/mux-uploader-react";
import { useState, useEffect } from "react";


const UploadAsset = () => {

    const [uploadUrl, setUploadUrl] = useState(null);


    return (
      <div className="app-upload__container">
        <MuxUploader endpoint={uploadUrl} />
      </div>
    );
};

export default UploadAsset;