import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../../../utils/Auth.js";

export default function Login({ onSwitchToRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMsg("");
    auth.login({ email, password })
      .then(() => { navigate("/app/alquimia-digital"); })
      .catch((err) => {
        setErrorMsg("Error al iniciar sesión. Revisa tus credenciales.");
        console.error(err);
      });
  };
  
  return (
    <div className="auth-form-content">
      <h2 className="auth-title">Bienvenido!</h2>
      <p className="auth-subtitle">Inicia sesión para continuar a nuestra plataforma de aprendizaje!</p>
      
      <form className="auth-form-elements" onSubmit={handleLogin}>
        <label className="auth-label">
          <input 
            type="email" 
            placeholder="Correo electrónico" 
            className="auth-input" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="auth-label auth-label-password">
          <input 
            type="password" 
            placeholder="Contraseña" 
            className="auth-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <div className="auth-recovery">
          <a href="#">Recuperar contraseña</a>
        </div>
        {errorMsg && <p style={{ color: "red", fontSize: "14px", margin: "0" }}>{errorMsg}</p>}
        <button type="submit" className="auth-submit-btn">Iniciar Sesión</button>
      </form>

      <div className="auth-social">
        <div className="auth-social-text"><span>O continua con</span></div>
        <div className="auth-social-icons">
          <button type="button" className="auth-social-btn"><span className="icon-g">G</span></button>
          <button type="button" className="auth-social-btn"><span className="icon-a">A</span></button>
          <button type="button" className="auth-social-btn"><span className="icon-f">F</span></button>
        </div>
      </div>
      
      <div className="auth-switch-text">
        <button type="button" className="auth-switch-btn" onClick={onSwitchToRegister}>
          Registrate aquí
        </button>
      </div>
    </div>
  );
}
