// App.jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/public/login';
import SignUp from './components/public/signup';
import Layout from './components/private/layout/layout';

function App() {

  // Verificar si el usuario está autenticado
  const isAuthenticated = localStorage.getItem('token') !== null;

  if (isAuthenticated) {
    // Redirigir a la página de home si el usuario está autenticado
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/home" element={<Layout />} />
          {/* Redirigir a login por defecto */}
          <Route path="/" element={<Navigate to="/home" replace />} />
        </Routes>
      </BrowserRouter>
    );
  } else {
    // Redirigir a la página de login si el usuario no está autenticado
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/home" element={<Layout />} />
          {/* Redirigir a login por defecto */}
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;