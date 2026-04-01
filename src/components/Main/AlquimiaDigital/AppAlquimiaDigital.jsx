import SidebarUser from "./SidebarUser/SidebarUser.jsx";
import SidebarAdmin from "./SidebarAdmin/SidebarAdmin.jsx";
import Content from "./Content/Content.jsx";

import { useState, useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext.js";
import { api } from "../../../utils/Api.js";


export default function AppAlquimiaDigital() {
  const { isLoggedIn, isAdmin, authLoading } = useContext(CurrentUserContext);

  const [activeSection, setActiveSection] = useState("dashboard");
  const [assets, setAssets] = useState([]);
  const [ownedAssets, setOwnedAssets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!authLoading) {
      setActiveSection(isAdmin ? "uploadAsset" : "dashboard");
    }
  }, [authLoading, isAdmin]);

  useEffect(() => {
    if (activeSection === "store" || activeSection === "assetsList") {
      setIsLoading(true);
      api.getAssets()
        .then(data => setAssets(data || []))
        .catch(err => console.log(err))
        .finally(() => setIsLoading(false));
    }
  }, [activeSection]);

  function addOwnedAsset(asset) {
    setOwnedAssets((prev) =>
      prev.find((ownedAsset) => ownedAsset.id === asset.id) ? prev : [...prev, asset]
    );
  }

  if (authLoading) {
    return (
      <div className="app app--loading">
        <div className="app__loader"></div>
        <p>Verificando sesión...</p>
      </div>
    );
  }

  if (!isLoggedIn) {
    return <Navigate to="/app/alquimia-digital/login" replace />;
  }

  return (
    <div className="app">
      {isAdmin ? (
        <SidebarAdmin activeSection={activeSection} onSectionChange={setActiveSection} />
      ) : (
        <SidebarUser activeSection={activeSection} onSectionChange={setActiveSection} />
      )}
      <Content activeSection={activeSection} assets={assets} ownedAssets={ownedAssets} addOwnedAsset={addOwnedAsset} isLoading={isLoading} />
    </div>
  );
}