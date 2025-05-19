import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from './index';
import '@testing-library/jest-dom';

const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate,
}));

// Mock del fetch global
global.fetch = jest.fn();

describe('Login Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    document.body.innerHTML = ''; // limpiar DOM entre tests
  });

  const renderLogin = () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
  };

  test('muestra error si campos están vacíos', () => {
    renderLogin();
    fireEvent.click(screen.getByText('Siguiente'));
    expect(screen.getByText('Complete todos los campos')).toBeInTheDocument();
  });

  test('muestra error si el username es muy corto', () => {
    renderLogin();
    fireEvent.change(screen.getByPlaceholderText('Nombre de usuario'), {
      target: { value: 'abc' },
    });
    fireEvent.change(screen.getByPlaceholderText('Contraseña'), {
      target: { value: '123456' },
    });
    fireEvent.click(screen.getByText('Siguiente'));
    expect(screen.getByText('El nombre de usuario debe tener al menos 6 caracteres')).toBeInTheDocument();
  });

  test('muestra error si la contraseña es muy corta', () => {
    renderLogin();
    fireEvent.change(screen.getByPlaceholderText('Nombre de usuario'), {
      target: { value: 'usuario123' },
    });
    fireEvent.change(screen.getByPlaceholderText('Contraseña'), {
      target: { value: '123' },
    });
    fireEvent.click(screen.getByText('Siguiente'));
    expect(screen.getByText('La contraseña debe tener al menos 6 caracteres')).toBeInTheDocument();
  });

});
