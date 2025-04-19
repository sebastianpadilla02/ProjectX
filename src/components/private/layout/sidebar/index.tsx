import { useNavigate, Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { RiTwitterXFill } from 'react-icons/ri';
import './index.css';

interface MenuItem {
  icon: React.ReactNode;
  text: string;
  path: string;
}

const Sidebar = () => {
  const navigate = useNavigate();
  const menuItems: MenuItem[] = [
    {
      icon: <AiFillHome size={26} />,
      text: "Home",
      path: "/home"
    },
    {
      icon: <CgProfile size={26} />,
      text: "Profile",
      path: "/profile"
    }
  ];

  const handleLogout = () => {
    localStorage.removeItem('token');
    console.log("Logout clicked");
    navigate('/login');
  };

  return (
    <header className="sidebar">
      <div className="sidebar-wrapper">
        {/* Logo de X */}
        <div className="logo-wrapper">
          <Link to="/home" aria-label="X">
            <div className="logo">
              <RiTwitterXFill size={28} color='white' />
            </div>
          </Link>
        </div>

        {/* Menú de navegación */}
        <nav className="sidebar-menu">
          {menuItems.map((item) => (
            <Link 
              key={item.text} 
              to={item.path} 
              className="menu-item"
            >
              <div className="menu-item-content">
                <div className="icon">{item.icon}</div>
                <span className="text">{item.text}</span>
              </div>
            </Link>
          ))}
        </nav>


        <div className="logout-wrapper">
          <button type='button' className="logout-button" onClick={handleLogout}>
            <span className="logout-button-text">Logout</span>
          </button>
        </div>

        {/* User Profile Button */}
        <div className="profile-button-wrapper">
          <button 
            onClick={() => navigate('/profile')}
            className="profile-button">
            <img 
              src= "./src/assets/user.png"
              alt="profile" 
              className="profile-image"
            />
            <div className="profile-info">
              <span className="profile-name">{localStorage.getItem('name')}</span>
              <span className="profile-username">@{localStorage.getItem('name')}</span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Sidebar;