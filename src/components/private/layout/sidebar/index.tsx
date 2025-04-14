import { Link } from 'react-router-dom';
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

  return (
    <header className="sidebar">
      <div className="sidebar-wrapper">
        {/* Logo de X */}
        <div className="logo-wrapper">
          <Link to="/home" aria-label="X">
            <div className="logo">
              <RiTwitterXFill size={28} />
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

        {/* Botón de Post */}
        <div className="post-button-wrapper">
          <button className="post-button">
            <span className="post-button-text">Post</span>
          </button>
        </div>

        {/* User Profile Button */}
        <div className="profile-button-wrapper">
          <button className="profile-button">
            <img 
              src="/avatar.png" 
              alt="profile" 
              className="profile-image"
            />
            <div className="profile-info">
              <span className="profile-name">user</span>
              <span className="profile-username">@user</span>
            </div>
            <span className="profile-more">...</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Sidebar;