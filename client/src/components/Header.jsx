import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
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
            </ul>
          </nav>
        </header>
      </div>

    )

}

export default Header;