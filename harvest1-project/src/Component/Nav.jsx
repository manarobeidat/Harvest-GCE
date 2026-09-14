import '../css/Nav.css';
import { useNavigate } from 'react-router-dom';
import logo from '../img/logo1.jpg';

export default function Nav() {
  const navigate = useNavigate();

  return (
    <nav className="nav">
      {/* Logo */}
      <img className="logo" src={logo} alt="Logo" />

      {/* Links */}
      <ul className="nav-links">
        <li className="nav-link" onClick={() => navigate('/')}>
          Home
        </li>
        <li className="nav-link" onClick={() => navigate('/food-rescue')}>
          Food Rescue
        </li>
        <li className="nav-link" onClick={() => navigate('/learn')}>
          Learn
        </li>
        <li className="nav-link" onClick={() => navigate('/smart-farming')}>
          Smart Farming
        </li>
      </ul>
    </nav>
  );
}