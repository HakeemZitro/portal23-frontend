import iconStore from "../../../../assets/icons/icon_store.svg";
import iconLayout from "../../../../assets/icons/icon_layout.svg";
import iconBook from "../../../../assets/icons/icon_book.svg";
import iconFolder from "../../../../assets/icons/icon_folder.svg";
import logo from "../../../../assets/images/logo_wobgblack.webp";
import { useContext } from "react";
import { CurrentUserContext } from "../../../../contexts/CurrentUserContext.js";

export default function SidebarUser({ activeSection, onSectionChange }) {
  const { currentUser, logout } = useContext(CurrentUserContext);

  return (
    <aside className="app-sidebar">
      <div className="app-sidebar__brand">
        <img src={logo} alt="Logo" className="app-sidebar__brand-logo" />
        <span className="app-sidebar__brand-name">Alquimia Digital</span>
      </div>
      <button className={`app-sidebar__store-btn ${activeSection === "store" ? "app-sidebar__store-btn_active" : ""}`} type="button" onClick={() => onSectionChange("store")}>
        <img src={iconStore} alt="Icono de tienda" className="app-sidebar__store-icon" />
        Tienda de Contenido
      </button>
      <nav className="app-sidebar__nav">
        <ul className="app-sidebar__tabs">
          <li key="dashboard" className="app-sidebar__tabs-item">
            <button type="button" className={`app-sidebar__tabs-link ${activeSection === "dashboard" ? "app-sidebar__tabs-link_active" : ""}`} onClick={() => onSectionChange("dashboard")}>
              <img src={iconLayout} alt="Icono de tabs" className="app-sidebar__tabs-icon" />
              <span className="app-sidebar__tabs-text">Dashboard</span>
              {activeSection === "dashboard" && <span className="app-sidebar__active-indicator" />}
            </button>
          </li>
          <li key="courses" className="app-sidebar__tabs-item">
            <button type="button" className={`app-sidebar__tabs-link ${activeSection === "courses" ? "app-sidebar__tabs-link_active" : ""}`} onClick={() => onSectionChange("courses")}>
              <img src={iconBook} alt="Icono de tabs" className="app-sidebar__tabs-icon" />
              <span className="app-sidebar__tabs-text">Mi Contenido</span>
              {activeSection === "courses" && <span className="app-sidebar__active-indicator" />}
            </button>
          </li>
          <li key="resources" className="app-sidebar__tabs-item">
            <button type="button" className={`app-sidebar__tabs-link ${activeSection === "resources" ? "app-sidebar__tabs-link_active" : ""}`} onClick={() => onSectionChange("resources")}>
              <img src={iconFolder} alt="Icono de tabs" className="app-sidebar__tabs-icon" />
              <span className="app-sidebar__tabs-text">Recursos</span>
              {activeSection === "resources" && <span className="app-sidebar__active-indicator" />}
            </button>
          </li>
        </ul>
      </nav>
      <div className="app-sidebar__user">
        <img src={currentUser?.avatar} alt="Avatar de usuario" className="app-sidebar__user-avatar" />
        <div className="app-sidebar__user-info">
          <span className="app-sidebar__user-name">{currentUser?.name}</span>
          <span className="app-sidebar__user-email">{currentUser?.email}</span>
        </div>
        <button type="button" className="app-sidebar__logout-btn" onClick={logout} title="Cerrar sesión">
          ↩
        </button>
      </div>
    </aside>
  );
}
