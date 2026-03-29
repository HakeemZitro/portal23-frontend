import React from "react";

export default function Register({ onSwitchToLogin }) {
  return (
    <div className="auth-form-content">
      <h2 className="auth-title">Create Account</h2>
      <p className="auth-subtitle">Join us and expand your horizons</p>

      <form className="auth-form-elements">
        <label className="auth-label">
          <input type="text" placeholder="Full Name" className="auth-input" />
        </label>
        <label className="auth-label">
          <input type="email" placeholder="Email" className="auth-input" />
        </label>
        <label className="auth-label auth-label-password">
          <input type="password" placeholder="Password" className="auth-input" />
          <button type="button" className="auth-eye-btn">
             <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="currentColor"/></svg>
          </button>
        </label>
        <button type="button" className="auth-submit-btn">Sign Up</button>
      </form>
      
      <div className="auth-social">
        <div className="auth-social-text"><span>Or register with</span></div>
        <div className="auth-social-icons">
          <button type="button" className="auth-social-btn"><span className="icon-g">G</span></button>
          <button type="button" className="auth-social-btn"><span className="icon-a">A</span></button>
          <button type="button" className="auth-social-btn"><span className="icon-f">F</span></button>
        </div>
      </div>

      <div className="auth-switch-text">
        <button type="button" className="auth-switch-btn" onClick={onSwitchToLogin}>
          Already have an account? Login here
        </button>
      </div>
    </div>
  );
}
