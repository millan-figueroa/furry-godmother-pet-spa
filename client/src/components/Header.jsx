import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/Header.css'; 
import Logo from "../assets/css/images/furry_godmother_filled_light.png";
import PropTypes from 'prop-types';  // Import PropTypes

const Header = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id="header-wrapper">
      <header id="header" className="container">
        <div id="logo">
          <img src={Logo} alt="Logo" />
        </div>

        {/* Hamburger Icon
        <div className="hamburger" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </div> */}

        {/* Nav */}
        <nav id="nav">
          <ul>
            <li className="current" style={{ whiteSpace: 'nowrap' }}>
              <Link to="/">Welcome</Link>
            </li>
            <li style={{ whiteSpace: 'nowrap' }}>
              <Link to="/services">Services</Link>
            </li>              
            <li style={{ whiteSpace: 'nowrap' }}>
              <Link to="/booking">Booking</Link>
            </li>
            <li style={{ whiteSpace: 'nowrap' }}>
              <Link to="/staff">Staff</Link>
            </li>
            <li style={{ whiteSpace: 'nowrap' }}>
              <Link to="/admin">Admin</Link>
            </li>
             {/* Conditionally render the login link inside the nav menu when dropdown is active */}
            {isMenuOpen && (
              <li style={{ whiteSpace: 'nowrap' }}>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </nav>
         {/* Right-side buttons */}
         <div className="header-buttons">
          <button className="login-btn">Login</button>
          <button onClick={toggleDarkMode} className="dark-mode-toggle">
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} size="lg" />
          </button>
        </div>
      </header>
    </div>
  );
};


Header.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,     // isDarkMode should be a boolean and is required
  toggleDarkMode: PropTypes.func.isRequired  // toggleDarkMode should be a function and is required
};
export default Header;
