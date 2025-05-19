import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SignUp from './index';
import '@testing-library/jest-dom';

describe('SignUp Component', () => {
  const renderComponent = () =>
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );

  test('renderiza todos los campos del formulario', () => {
    renderComponent();
    expect(screen.getByPlaceholderText('Nombre')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Correo electrónico')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Nombre de usuario')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Contraseña')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Confirmar contraseña')).toBeInTheDocument();
    expect(screen.getByText('Crear cuenta')).toBeInTheDocument();
  });

  test('muestra error si se envía el formulario vacío', () => {
    renderComponent();
    fireEvent.click(screen.getByText('Crear cuenta'));
    expect(screen.getByText('Complete todos los campos')).toBeInTheDocument();
  });

  test('muestra error si el correo es inválido', () => {
    renderComponent();
    fireEvent.change(screen.getByPlaceholderText('Nombre'), { target: { value: 'Juan' } });
    fireEvent.change(screen.getByPlaceholderText('Correo electrónico'), { target: { value: 'correo-invalido' } });
    fireEvent.change(screen.getByPlaceholderText('Nombre de usuario'), { target: { value: 'juan123' } });
    fireEvent.change(screen.getByPlaceholderText('Contraseña'), { target: { value: 'abc123' } });
    fireEvent.change(screen.getByPlaceholderText('Confirmar contraseña'), { target: { value: 'abc123' } });
    fireEvent.click(screen.getByText('Crear cuenta'));
    expect(screen.getByText('Introduzca un correo electrónico válido')).toBeInTheDocument();
  });

  test('muestra error si las contraseñas no coinciden', () => {
    renderComponent();
    fireEvent.change(screen.getByPlaceholderText('Nombre'), { target: { value: 'Ana' } });
    fireEvent.change(screen.getByPlaceholderText('Correo electrónico'), { target: { value: 'ana@mail.com' } });
    fireEvent.change(screen.getByPlaceholderText('Nombre de usuario'), { target: { value: 'ana123' } });
    fireEvent.change(screen.getByPlaceholderText('Contraseña'), { target: { value: 'abc123' } });
    fireEvent.change(screen.getByPlaceholderText('Confirmar contraseña'), { target: { value: 'diferente123' } });
    fireEvent.click(screen.getByText('Crear cuenta'));
    expect(screen.getByText('Las contraseñas no coinciden')).toBeInTheDocument();
  });
});
