import { useState, useEffect } from "react";
import { api } from "../../../../../utils/Api.js";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api.getAllUsers()
      .then((data) => setUsers(data || []))
      .catch((err) => console.error("Error al obtener usuarios:", err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="app-users">
      <div className="app-users__top">
        <div className="app-users__header">
          <h1 className="app-users__title">Directorio de Usuarios</h1>
        </div>
      </div>
      
      {isLoading ? (
        <div className="app-users__loader-container">
          <div className="app-users__loader"></div>
          <p className="app-users__loader-text">Cargando directorio...</p>
        </div>
      ) : (
        <div className="app-users__grid">
          {users.map((user) => (
            <div key={user._id} className="app-users__card">
              <div className="app-users__avatar-container">
                <img 
                  src={user.avatar || "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"} 
                  alt={`Avatar de ${user.name}`} 
                  className="app-users__avatar" 
                />
              </div>
              <div className="app-users__info">
                <h3 className="app-users__name">{user.name}</h3>
                <p className="app-users__email">{user.email}</p>
                <div className="app-users__role-container">
                  <span className={`app-users__role ${user.role === "AdminOnly" ? "app-users__role_admin" : ""}`}>
                    {user.role === "AdminOnly" ? "Administrador" : "Estudiante"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
