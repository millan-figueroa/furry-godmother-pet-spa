import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars, faHome, faCalendarAlt, faClipboardUser, faSignInAlt, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/Header.css'; 
import Logo from "../assets/css/images/furry_godmother_filled_light.png";
import LogoDark from "../assets/css/images/furry_godmother_logo_filled_dark.png";
import PropTypes from 'prop-types';  // Import PropTypes

const Header = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id="header-wrapper" className={isDarkMode ? 'dark-mode' : ''}>
      <header id="header" className="container">
        <div id="logo">
          {/* Conditionally rendering the light or dark logo based on the dark mode state */}
          <img src={isDarkMode ? LogoDark : Logo} alt="Logo" />
        </div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
        </div>

        {/* Nav */}
        <nav id="nav">
          <ul>
            <li className="current" style={{ whiteSpace: 'nowrap' }}>
              <Link to="/">Welcome</Link>
            </li>
            {/* <li style={{ whiteSpace: 'nowrap' }}>
              <Link to="/services">Services</Link>
            </li>               */}
            <li style={{ whiteSpace: 'nowrap' }}>
              <Link to="/booking">Booking/ Services</Link>
            </li>
            <li style={{ whiteSpace: 'nowrap' }}>
              <Link to="/staff">Staff</Link>
            </li>
            {/* <li style={{ whiteSpace: 'nowrap' }}>
              <Link to="/admin">Admin</Link>
            </li> */}
          </ul>
        </nav>

        {/* Mobile Nav */}
          <nav id="mobile-nav">
          <ul>
            <li className="current" style={{ whiteSpace: 'nowrap' }}>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} size="lg" />
            </Link>
            </li>        
            <li style={{ whiteSpace: 'nowrap' }}>
            <Link to="/booking">
              <FontAwesomeIcon icon={faCalendarAlt} size="lg" />
            </Link>
            </li>
            <li style={{ whiteSpace: 'nowrap' }}>
            <Link to="/staff">
              <FontAwesomeIcon icon={faClipboardUser} size="lg" />
            </Link>
            </li>
            <li style={{ whiteSpace: 'nowrap' }}>
            <Link to="/admin">
              <FontAwesomeIcon icon={faSignInAlt} size="lg" />
            </Link>
            </li>
          </ul>
        </nav>

         {/* Right-side buttons */}
         <div className="header-buttons">
         <Link to="/admin" className="login-btn">
            Login
          </Link>
          <button onClick={toggleDarkMode} className="dark-mode-toggle">
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} size="lg" />
          </button>
        </div>
      </header>
    </div>
  );
};


Header.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,     
  toggleDarkMode: PropTypes.func.isRequired, 
};

export default Header;
