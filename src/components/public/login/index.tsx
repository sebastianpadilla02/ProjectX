import React from 'react'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import './index.css'

function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

  return (
      <div className="login-wrapper">
      <div className="login-container">
        <div className="login-box">
          <div className="x-logo">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#fff" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </div>

          <h1>Inicia sesión en X</h1>

          <form className="login-form">
            <div className="input-group">
              <input
                type="text"
                name="username"
                placeholder="Nombre de usuario"
                value={formData.username} 
                /* onChange={} */
                required
              />
            </div>

            <div className="input-group">
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={formData.password}
                /* onChange={} */
                required
              />
            </div>

            <button type="submit" className="login-button">
              Siguiente
            </button>

            <button type="button" className="forgot-password-button">
              ¿Olvidaste tu contraseña?
            </button>
          </form>

          <div className="register-prompt">
            <span>¿No tienes una cuenta?</span>
            <Link to="/register" className="register-link">
                Regístrate
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
