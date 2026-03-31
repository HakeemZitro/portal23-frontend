import SidebarUser from "./SidebarUser/SidebarUser.jsx";
import SidebarAdmin from "./SidebarAdmin/SidebarAdmin.jsx";
import Content from "./Content/Content.jsx";

import { useState, useEffect, useCallback } from "react";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext.js";
import { api } from "../../../utils/Api.js";


export default function AppAlquimiaDigital() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);

  const [activeSection, setActiveSection] = useState("dashboard");
  const [assets, setAssets] = useState([]);
  const [ownedAssets, setOwnedAssets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const verifySession = useCallback(() => {
    setAuthLoading(true);

    api.getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
        if(userData.role === "AdminOnly") {
          setIsAdmin(true);
        }
      })
      .catch((err) => {
        console.error("Error al verificar sesión:", err);
        setCurrentUser(null);
        setIsAdmin(false);
      })
      .finally(() => {
        setAuthLoading(false);
      });
  }, []);

  useEffect(() => {
    verifySession();
  }, [verifySession]);

  async function login(email, password) {
    await api.login({ email, password });
    verifySession();
  }

  async function signup(name, email, password) {
    await api.signup({ name, email, password });
    await login(email, password);
  }

  function logout() {
    setCurrentUser(null);
    setIsAdmin(false);
  }

  const isLoggedIn = !!currentUser;

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
    <CurrentUserContext.Provider
      value={{ currentUser, isLoggedIn, isAdmin, isLoading: authLoading, login, signup, logout }}
    >
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
    </CurrentUserContext.Provider>
  );
}