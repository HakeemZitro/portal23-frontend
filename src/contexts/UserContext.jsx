import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { api } from "../utils/Api.js";

const UserContext = createContext(null);

/**
 * Hook para consumir el contexto de usuario desde cualquier componente hijo.
 */
export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser debe usarse dentro de un UserProvider");
  }
  return context;
}

/**
 * UserProvider — envuelve la sección AlquimiaDigital y expone:
 *   • currentUser  → { name, email, avatar, ... } | null
 *   • isLoggedIn   → boolean
 *   • isAdmin      → boolean  (determinado por petición al backend)
 *   • isLoading    → true mientras se verifica la sesión
 *   • login(email, password)  → autentica via cookie
 *   • signup(name, email, password) → registra usuario
 *   • logout()     → limpia sesión
 */
export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Verifica la sesión: obtiene info de usuario (cookie se envía auto)
   * y luego intenta GET /users (ruta admin-only).
   * 200 → isAdmin = true  |  403 → isAdmin = false
   */
  const verifySession = useCallback(() => {
    setIsLoading(true);

    api.getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
        return api.checkAdmin();
      })
      .then((adminStatus) => {
        setIsAdmin(adminStatus);
      })
      .catch((err) => {
        console.error("Error al verificar sesión:", err);
        setCurrentUser(null);
        setIsAdmin(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  // Al montar, verificar si hay sesión activa (cookie)
  useEffect(() => {
    verifySession();
  }, [verifySession]);

  /**
   * Login — envía credenciales al backend.
   * El backend establece la cookie HttpOnly,
   * luego re-verificamos la sesión.
   */
  async function login(email, password) {
    await api.login({ email, password });
    verifySession();
  }

  /**
   * Signup — registra un nuevo usuario.
   * Después del registro exitoso, hace login automático.
   */
  async function signup(name, email, password) {
    await api.signup({ name, email, password });
    await login(email, password);
  }

  function logout() {
    setCurrentUser(null);
    setIsAdmin(false);
    // Si el backend tiene un endpoint de logout para limpiar la cookie,
    // llamarlo aquí: api.logout()
  }

  const isLoggedIn = !!currentUser;

  return (
    <UserContext.Provider
      value={{ currentUser, isLoggedIn, isAdmin, isLoading, login, signup, logout }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
