import { useContext } from "react";
import { CurrentUserContext } from "../../../../contexts/CurrentUserContext.js";

export default function ProtectedRoute({ children }) {
  const { isAdmin, isLoggedIn, isLoading } = useContext(CurrentUserContext);

  if (isLoading) {
    return (
      <div className="protected-route__loading">
        <div className="protected-route__spinner"></div>
        <p>Verificando permisos...</p>
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="protected-route__denied">
        <div className="protected-route__denied-icon">🔒</div>
        <h2 className="protected-route__denied-title">Acceso Restringido</h2>
        <p className="protected-route__denied-text">
          Debes iniciar sesión para acceder a esta sección.
        </p>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="protected-route__denied">
        <div className="protected-route__denied-icon">⛔</div>
        <h2 className="protected-route__denied-title">Sin Autorización</h2>
        <p className="protected-route__denied-text">
          Esta sección está reservada para administradores.
        </p>
      </div>
    );
  }

  return children;
}
