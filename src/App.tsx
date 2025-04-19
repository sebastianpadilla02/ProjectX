import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/public/login';
import SignUp from './components/public/signup';
import Layout from './components/private/layout/layout';

function App() {
  const isAuthenticated = localStorage.getItem('token') !== null;

  if (!isAuthenticated) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    );
  } 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Navigate to="/home" replace />} />
        <Route path="/register" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Layout />} />
        <Route path="/profile" element={<Layout />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;