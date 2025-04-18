import React from 'react'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import './index.css'

const apiURL = 'http://localhost:8083';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
      username: '',
      password: ''
  })

  const handleLogin = async () => {
    const message = document.getElementById('error-message');
    // Validate form data before sending to server
    console.log('Form data:', formData);
    // Validate password confirmation
    
    if(message) {

      if (formData.username === '', formData.password === '') {
        message.innerHTML = "Complete todos los campos";
        message.style.color = "red";
        return;
      }

      if (formData.username.length < 6) {
        message.innerHTML = "El nombre de usuario debe tener al menos 6 caracteres";
        message.style.color = "red";
        return;
      }

      if (formData.password.length < 6) {
        message.innerHTML = "La contraseña debe tener al menos 6 caracteres";
        message.style.color = "red";
        return;
      }

      const url = `${apiURL}/api/users/login`;

      const response = await fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
      });

      const responseData = await response.json();

      console.log(responseData);

      if (response.ok) {
          const token = responseData?.data?.token;
          if(!token) {
            message.innerHTML = "Token no encontrado";
            message.style.color = "red";
            return;
          }
          localStorage.setItem('token', token);
          navigate('/home');
      } else {
          message.innerHTML = 'Usuario o Contraseña incorrectos';
          message.style.color = "red";
      }
    }
  }
  
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
                onChange={(e) => setFormData({...formData, username: e.target.value})}
                required
              />
            </div>

            <div className="input-group">
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                required
              />
            </div>

            <div className="error-message" id="error-message">
            </div>

            <button type="button" className="login-button" onClick={handleLogin}>
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
