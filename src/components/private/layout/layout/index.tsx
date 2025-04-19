import Sidebar from '../sidebar';
import MainContent from '../maincontent';
import Profile from '../../profile';
import { useLocation} from 'react-router-dom';
import './index.css';

const Layout = () => {
    const location = useLocation();
    
    /* Verificar autenticación en cada renderizado
    if (!localStorage.getItem('token')) {
        navigate('/login');
        return null;
    } */
    
        return (
          <div className="layout-container">
            <div className="layout-wrapper">
              <Sidebar />
              {location.pathname === '/profile' ? <Profile /> : <MainContent />}
            </div>
          </div>
        );
};

export default Layout;