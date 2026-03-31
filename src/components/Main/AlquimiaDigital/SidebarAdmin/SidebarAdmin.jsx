import iconUpload from "../../../../assets/icons/icon_upload.svg";
import iconLayout from "../../../../assets/icons/icon_layout.svg";
import iconUsers from "../../../../assets/icons/icon_users.svg";
import logo from "../../../../assets/images/logo_wobgblack.webp";
import userAvatar from "../../../../assets/images/user_avatar.webp";
import { useContext } from "react";
import { CurrentUserContext } from "../../../../contexts/CurrentUserContext.js";

export default function SidebarAdmin({ activeSection, onSectionChange }) {
  const { currentUser, logout } = useContext(CurrentUserContext);

  return (
    <aside className="app-sidebar">
      <div className="app-sidebar__brand">
        <img src={logo} alt="Logo" className="app-sidebar__brand-logo" />
        <span className="app-sidebar__brand-name">Alquimia Digital</span>
      </div>
      <button className={`app-sidebar__store-btn ${activeSection === "uploadAsset" ? "app-sidebar__store-btn_active" : ""}`} type="button" onClick={() => onSectionChange("uploadAsset")}>
        <img src={iconUpload} alt="Icono de tienda" className="app-sidebar__store-icon" />
        Subir Nuevo Asset
      </button>
      <nav className="app-sidebar__nav">
        <ul className="app-sidebar__tabs">
          <li key="assetsList" className="app-sidebar__tabs-item">
            <button type="button" className={`app-sidebar__tabs-link ${activeSection === "assetsList" ? "app-sidebar__tabs-link_active" : ""}`} onClick={() => onSectionChange("assetsList")}>
              <img src={iconLayout} alt="Icono de tabs" className="app-sidebar__tabs-icon" />
              <span className="app-sidebar__tabs-text">Assets List</span>
              {activeSection === "assetsList" && <span className="app-sidebar__active-indicator" />}
            </button>
          </li>
          <li key="usersList" className="app-sidebar__tabs-item">
            <button type="button" className={`app-sidebar__tabs-link ${activeSection === "usersList" ? "app-sidebar__tabs-link_active" : ""}`} onClick={() => onSectionChange("usersList")}>
              <img src={iconUsers} alt="Icono de tabs" className="app-sidebar__tabs-icon" />
              <span className="app-sidebar__tabs-text">Users List</span>
              {activeSection === "usersList" && <span className="app-sidebar__active-indicator" />}
            </button>
          </li>
        </ul>
      </nav>
      <div className="app-sidebar__user">
        <img src={userAvatar} alt="Avatar de usuario" className="app-sidebar__user-avatar" />
        <div className="app-sidebar__user-info">
          <span className="app-sidebar__user-name">{currentUser?.name || "Admin"}</span>
          <span className="app-sidebar__user-email">{currentUser?.email || "admin@email.com"}</span>
        </div>
        <button type="button" className="app-sidebar__logout-btn" onClick={logout} title="Cerrar sesión">
          ↩
        </button>
      </div>
    </aside>
  );
}
