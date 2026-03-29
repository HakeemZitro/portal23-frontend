import { useState, useEffect } from "react";
import Sidebar from "./Sidebar/Sidebar.jsx";
import Content from "./Content/Content.jsx";
import { muxApi } from "../../../utils/Api.js";

export default function AppAlquimiaDigital() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [assets, setAssets] = useState([]);
  const [ownedAssets, setOwnedAssets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (activeSection === "store") {
      setIsLoading(true);
      muxApi.getAssets()
        .then(data => setAssets(data || []))
        .catch(err => console.log(err))
        .finally(() => setIsLoading(false));
    }
  }, [activeSection]);

  function addOwnedAsset(asset) {
    setOwnedAssets((prev) => prev.find((ownedAsset) => ownedAsset.id === asset.id) ? prev : [...prev, asset]);
  }

  return (
    <div className="app">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <Content activeSection={activeSection} assets={assets} ownedAssets={ownedAssets} addOwnedAsset={addOwnedAsset} isLoading={isLoading} />
    </div>
  );
}