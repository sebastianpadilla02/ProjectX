import Sidebar from '../sidebar';
import MainContent from '../maincontent';
import './index.css';
import { useNavigate, Link } from 'react-router-dom';

const Layout = () => {
    const navigate = useNavigate();
  return (
    <div className="layout-container">
      <div className="layout-wrapper">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};

export default Layout;