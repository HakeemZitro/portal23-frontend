import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../../../utils/Auth.js";

export default function Register({ onSwitchToLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setErrorMsg("");
    auth.register({ name, email, password })
      .then(() => { navigate("/app/alquimia-digital/login"); })
      .catch((err) => {
        setErrorMsg("Error al registrar cuenta. Verifica tus datos.");
        console.error(err);
      });
  };
  
  return (
    <div className="auth-form-content">
      <h2 className="auth-title">Crear Cuenta</h2>
      <p className="auth-subtitle">Únete a nosotros y expande tus horizontes</p>

      <form className="auth-form-elements" onSubmit={handleRegister}>
        <label className="auth-label">
          <input 
            type="text" 
            placeholder="Nombre Completo" 
            className="auth-input" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label className="auth-label">
          <input 
            type="email" 
            placeholder="Correo Electrónico" 
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
        {errorMsg && <p style={{ color: "red", fontSize: "14px", margin: "0" }}>{errorMsg}</p>}
        <button type="submit" className="auth-submit-btn">Registrarse</button>
      </form>
      
      <div className="auth-social">
        <div className="auth-social-text"><span>O regístrate con</span></div>
        <div className="auth-social-icons">
          <button type="button" className="auth-social-btn"><span className="icon-g">G</span></button>
          <button type="button" className="auth-social-btn"><span className="icon-a">A</span></button>
          <button type="button" className="auth-social-btn"><span className="icon-f">F</span></button>
        </div>
      </div>

      <div className="auth-switch-text">
        <button type="button" className="auth-switch-btn" onClick={onSwitchToLogin}>
          ¿Ya tienes una cuenta? Inicia sesión aquí
        </button>
      </div>
    </div>
  );
}
