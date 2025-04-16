import React from 'react'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import './index.css'


function SignUp() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    passwordConfirmation: ''
  })

  const handleSignUp = async () => {
    console.log('Form data:', formData);
    // Validate password confirmation

    try {
      const response = await fetch('https://api.example.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        console.log('User registered successfully:', data);
        navigate('/login');
      } else {
        console.error('Error registering user:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }


  return (
    <div className="register-wrapper">
      <div className="register-container">
        <div className="register-box">
          <div className="x-logo">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#fff" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </div>

          <h1>Crea tu cuenta</h1>

          <form  className="register-form">
            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>

            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>

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

            <div className="input-group">
              <input
                type="password"
                name="passwordConfirmation"
                placeholder="Confirmar contraseña"
                value={formData.passwordConfirmation}
                onChange={(e) => setFormData({...formData,passwordConfirmation: e.target.value})}
                required
              />
            </div>

            <div className="terms-text">
              Al registrarte, aceptas los{' '}
              <a href="#" className="link">Términos de servicio</a> y la{' '}
              <a href="#" className="link">Política de privacidad</a>, incluida la{' '}
              <a href="#" className="link">política de Uso de Cookies</a>.
            </div>

            <button type="button" className="register-button" onClick ={handleSignUp}>
              Crear cuenta
            </button>
          </form>

          <div className="login-prompt">
            <span>¿Ya tienes una cuenta?</span>
            <Link to="/login" className="login-link">
              Iniciar sesión
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp;
