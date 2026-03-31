import { useUser } from "../../../../contexts/UserContext.jsx";

/**
 * ProtectedRoute — componente que protege secciones solo para admin.
 *
 * Props:
 *   • children        → el contenido a renderizar si el usuario tiene acceso
 *   • fallback        → (opcional) componente a mostrar si NO tiene acceso
 *
 * Si el usuario no es admin muestra el fallback o un mensaje por defecto.
 */
export default function ProtectedRoute({ children, fallback }) {
  const { isAdmin, isLoggedIn, isLoading } = useUser();

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
      fallback || (
        <div className="protected-route__denied">
          <div className="protected-route__denied-icon">🔒</div>
          <h2 className="protected-route__denied-title">Acceso Restringido</h2>
          <p className="protected-route__denied-text">
            Debes iniciar sesión para acceder a esta sección.
          </p>
        </div>
      )
    );
  }

  if (!isAdmin) {
    return (
      fallback || (
        <div className="protected-route__denied">
          <div className="protected-route__denied-icon">⛔</div>
          <h2 className="protected-route__denied-title">Sin Autorización</h2>
          <p className="protected-route__denied-text">
            Esta sección está reservada para administradores.
          </p>
        </div>
      )
    );
  }

  return children;
}
