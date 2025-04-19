import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/public/login';
import SignUp from './components/public/signup';
import Layout from './components/private/layout/layout';
import Profile from './components/private/profile';

function App() {
  const isAuthenticated = localStorage.getItem('token') !== null;

  if (!isAuthenticated) {
    return (
      // Si no está autenticado, redirigir a login
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/home" element={<Layout />} />
          <Route path="/profile" element={<Profile />} />
          {/* Redirigir a login por defecto */}
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    );
  } 

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/home" element={<Layout />} />
          <Route path="/profile" element={<Profile />} />
          {/* Redirigir a login por defecto */}
          <Route path="/" element={<Navigate to="/home" replace />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;