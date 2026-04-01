import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";
import AppAlquimiaDigital from "./Main/AlquimiaDigital/AppAlquimiaDigital.jsx";
import AuthPage from "./Main/AlquimiaDigital/AuthPage/AuthPage.jsx";

import { useEffect, useState, useCallback } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import { api } from "../utils/Api.js";
import { auth } from "../utils/Auth.js";

function App() {
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);

  const verifySession = useCallback(() => {
    setAuthLoading(true);
    api.getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
        if (userData.role === "AdminOnly") {
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
    if (location.pathname.startsWith("/app/alquimia-digital")) {
      verifySession();
    }
  }, [location.pathname, verifySession]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  async function login(email, password) {
    await auth.login({ email, password });
    verifySession();
  }

  async function signup(name, email, password) {
    await auth.register({ name, email, password });
    await login(email, password);
  }

  async function logout() {
    try {
      await auth.logout();
    } catch (err) {
      console.error("Error al cerrar sesión", err);
    } finally {
      setCurrentUser(null);
      setIsAdmin(false);
    }
  }

  const isLoggedIn = !!currentUser;

  return (
    <CurrentUserContext.Provider value={{ currentUser, isLoggedIn, isAdmin, authLoading, login, signup, logout }}>
      <Routes>
        <Route path="/app/alquimia-digital" element={<AppAlquimiaDigital />} />
        <Route path="/app/alquimia-digital/login" element={isLoggedIn ? <Navigate to="/app/alquimia-digital" replace /> : <AuthPage />} />
        <Route path="/app/alquimia-digital/register" element={isLoggedIn ? <Navigate to="/app/alquimia-digital" replace /> : <AuthPage />} />
        <Route path="/*" element={
          <>
            <Header />
            <Main />
            <Footer />
          </>
        } />
      </Routes>
    </CurrentUserContext.Provider>
  )
}

export default App;