import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import Logo from "../assets/css/images/furry_godmother_filled_light.png";
import PropTypes from 'prop-types';  // Import PropTypes

const Header = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div id="header-wrapper">
      <header id="header" className="container">
        <div id="logo">
          <img src={Logo} alt="Logo" />
        </div>

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
            <li style={{ whiteSpace: 'nowrap' }}>
              
            </li>
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
