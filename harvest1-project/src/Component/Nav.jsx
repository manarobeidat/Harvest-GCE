import '../css/Nav.css';

import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../img/logo1.jpg';

export default function Nav() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="nav">
      {/* Logo */}
      <button
        type="button"
        className="logo-button"
        onClick={() => navigate('/')}
        aria-label="Go to Home"
      >
        <img
          className="logo"
          src={logo}
          alt="Harvest Logo"
        />
      </button>

      {/* Links */}
      <ul className="nav-links">
        <li>
          <button
            type="button"
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={() => navigate('/')}
          >
            Home
          </button>
        </li>

        <li>
          <button
            type="button"
            className={`nav-link ${
              isActive('/food-rescue') ? 'active' : ''
            }`}
            onClick={() => navigate('/food-rescue')}
          >
            Food Rescue
          </button>
        </li>

        <li>
          <button
            type="button"
            className={`nav-link ${isActive('/learn') ? 'active' : ''}`}
            onClick={() => navigate('/learn')}
          >
            Learn
          </button>
        </li>

        <li>
          <button
            type="button"
            className={`nav-link ${
              isActive('/smart-farming') ? 'active' : ''
            }`}
            onClick={() => navigate('/smart-farming')}
          >
            Smart Farming
          </button>
        </li>

        <li>
          <button
            type="button"
            className={`nav-link ${
              isActive('/practical-learning')
                ? 'active'
                : ''
            }`}
            onClick={() => navigate('/practical-learning')}
          >
            Practical Learning
          </button>
        </li>
      </ul>
    </nav>
  );
}