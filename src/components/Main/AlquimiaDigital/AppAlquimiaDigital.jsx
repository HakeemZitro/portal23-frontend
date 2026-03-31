import SidebarUser from "./SidebarUser/SidebarUser.jsx";
import SidebarAdmin from "./SidebarAdmin/SidebarAdmin.jsx";
import Content from "./Content/Content.jsx";

import { useState, useEffect } from "react";
import { UserProvider, useUser } from "../../../contexts/UserContext.jsx";
import { api } from "../../../utils/Api.js";


export default function AppAlquimiaDigital() {
  const { isAdmin, isLoading: authLoading } = useUser();
  const [activeSection, setActiveSection] = useState("dashboard");
  const [assets, setAssets] = useState([]);
  const [ownedAssets, setOwnedAssets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Cuando se resuelve la autenticación, establecer sección inicial
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

  return (
    <UserProvider>
      <div className="app">
      {isAdmin ? (
        <SidebarAdmin activeSection={activeSection} onSectionChange={setActiveSection} />
      ) : (
        <SidebarUser activeSection={activeSection} onSectionChange={setActiveSection} />
      )}
      <Content
        activeSection={activeSection}
        assets={assets}
        ownedAssets={ownedAssets}
        addOwnedAsset={addOwnedAsset}
        isLoading={isLoading}
      />
    </div>
    </UserProvider>
  );
}