import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Profile from './index';
import '@testing-library/jest-dom';

// Mock del useNavigate
const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate,
}));

// Mock del componente TweetList para evitar errores de dependencias
jest.mock('../layout/maincontent/tweetlist', () => () => <div>Mocked TweetList</div>);

describe('Profile Component', () => {
  beforeEach(() => {
    // Simula datos de usuario
    localStorage.setItem('name', 'Juan Pérez');
    localStorage.setItem('username', 'juan123');
    jest.clearAllMocks();
  });

  const renderProfile = () => {
    render(
      <BrowserRouter>
        <Profile />
      </BrowserRouter>
    );
  };

  test('renderiza el nombre y el nombre de usuario desde localStorage', () => {
    renderProfile();
    expect(screen.getAllByText('Juan Pérez').length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText('@juan123')).toBeInTheDocument();
  });

  test('renderiza la imagen de perfil', () => {
    renderProfile();
    const img = screen.getByAltText('Profile') as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toContain('user.png');
  });

  test('redirige al home al hacer clic en el botón de volver', () => {
    renderProfile();
    const backButton = document.querySelector('.back-button') as HTMLButtonElement;
    fireEvent.click(backButton);
    expect(mockedNavigate).toHaveBeenCalledWith('/home');
  });
});
