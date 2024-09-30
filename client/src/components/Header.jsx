import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    // State to manage the theme
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Effect to apply the theme
    useEffect(() => {
        document.body.style.backgroundColor = isDarkMode ? '#333' : '#FFF';
        document.body.style.color = isDarkMode ? '#FFF' : '#000';
    }, [isDarkMode]); // Runs when isDarkMode changes

    // Function to toggle the theme
    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <div id="header-wrapper">
        <header id="header" className="container">
          <div id="logo">
            <h1><a href="/">Furry Godmother</a></h1>
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
                {/* Theme Toggle Button */}
                <button onClick={toggleTheme} style={{ marginTop: '5px', background: 'none', border: 'none', cursor: 'pointer' }}>
                    <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} size="lg" />
                </button>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
};

export default Header;