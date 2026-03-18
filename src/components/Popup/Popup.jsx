import loginImage from "../../assets/images/login.webp";
import registerImage from "../../assets/images/register.webp";

import React, { useState } from "react";
import Login from "./Login/Login.jsx";
import Register from "./Register/Register.jsx";

export default function Popup({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="auth-modal-overlay" onClick={onClose}>
      <div className={`auth-modal-wrapper ${isLogin ? 'show-login' : 'show-register'}`} onClick={(e) => e.stopPropagation()}>
        <div className="auth-modal-sides">
          <div className="auth-modal-form-side">
            <div className={`auth-form-container ${isLogin ? 'active' : 'inactive'}`}>
              <Login onSwitchToRegister={() => setIsLogin(false)} />
            </div>
            <div className={`auth-form-container ${!isLogin ? 'active' : 'inactive'}`}>
              <Register onSwitchToLogin={() => setIsLogin(true)} />
            </div>
          </div>
          <div className="auth-modal-image-side">
            <img src={loginImage} alt="Login illustration" className={`auth-image ${isLogin ? 'active' : 'inactive'}`} />
            <img src={registerImage} alt="Register illustration" className={`auth-image ${!isLogin ? 'active' : 'inactive'}`} />
          </div>
        </div>
      </div>
    </div>
  );
}
