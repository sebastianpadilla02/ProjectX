import React from 'react'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import './index.css'

const apiURL = 'http://localhost:8083';

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
    const message = document.getElementById('error-message');
    // Validate form data before sending to server
    console.log('Form data:', formData);
    // Validate password confirmation
    
    if(message) {

      if (formData.name === '', formData.email === '', formData.username === '', formData.password === '', formData.passwordConfirmation === '') {
        message.innerHTML = "Complete todos los campos";
        message.style.color = "red";
        return;
      }

      if (formData.name.length < 3) {
        message.innerHTML = "El nombre debe tener al menos 2 caracteres";
        message.style.color = "red";
        return;
      }
    
      if (!formData.email.includes('@')) {
        message.innerHTML = "Introduzca un correo electrónico válido";
        message.style.color = "red";
        return;
      }

      if (formData.username.length < 6) {
        message.innerHTML = "El nombre de usuario debe tener al menos 3 caracteres";
        message.style.color = "red";
        return;
      }

      if (formData.password.length < 6) {
        message.innerHTML = "La contraseña debe tener al menos 6 caracteres";
        message.style.color = "red";
        return;
      }

      if (formData.password !== formData.passwordConfirmation) {
        message.innerHTML = "Las contraseñas no coinciden";
        message.style.color = "red";
        return;
      }

      message.innerHTML = ""; // Clear previous messages
    }

    console.log('Sending data to the server...');

    const url = `${apiURL}/api/users`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        console.log('User registered successfully:', data);

        if(message) {
          message.innerHTML = "User registered successfully";
          message.style.color = "green";
        }

        if(document) {
          const name = document.getElementById('name') as HTMLInputElement;
          const email = document.getElementById('email') as HTMLInputElement;
          const username = document.getElementById('username') as HTMLInputElement;
          const password = document.getElementById('password') as HTMLInputElement;
          const passwordConfirmation = document.getElementById('passwordConfirmation') as HTMLInputElement;
          name.value = '';
          email.value = '';
          username.value = '';
          password.value = '';
          passwordConfirmation.value = '';
        }

        // Redirect to login page after successful registration
        setTimeout(() => { 
          navigate('/login');
        }
        , 5000); // Redirect after 5 seconds
      } else {
        const errorData = await response.json();
        console.error('Error registering user:', errorData.message);

        if (message && errorData.message == "user already exists") {
          message.innerHTML = "Usuario o correo ya registrado anteriormente";
          message.style.color = "red";
        }
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
                id="name"
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
                id="email"
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
                id="username"
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
                id="password"
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
                id="passwordConfirmation"
                placeholder="Confirmar contraseña"
                value={formData.passwordConfirmation}
                onChange={(e) => setFormData({...formData,passwordConfirmation: e.target.value})}
                required
              />
            </div>

            <div id="error-message" className="error-message">
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
