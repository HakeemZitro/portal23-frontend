import loginImage from "../../../../assets/images/login.webp";
import registerImage from "../../../../assets/images/register.webp";

import { useLocation, useNavigate } from "react-router-dom";
import Login from "./Login/Login.jsx";
import Register from "./Register/Register.jsx";

export default function AuthPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === "/app/alquimia-digital/login";

  return (
    <div className="auth-modal-overlay">
      <div className={`auth-modal-wrapper ${isLogin ? 'show-login' : 'show-register'}`} onClick={(e) => e.stopPropagation()}>
        <div className="auth-modal-sides">
          <div className="auth-modal-form-side">
            <div className={`auth-form-container ${isLogin ? 'active' : 'inactive'}`}>
              <Login onSwitchToRegister={() => navigate("/app/alquimia-digital/register")} />
            </div>
            <div className={`auth-form-container ${!isLogin ? 'active' : 'inactive'}`}>
              <Register onSwitchToLogin={() => navigate("/app/alquimia-digital/login")} />
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
