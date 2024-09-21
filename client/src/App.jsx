/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';


//Create a global header for all pages on the site, and render the target of the clicked route as the body of the page.

const App = () => {
  return (
    <div id="page-wrapper">
      <div id="header-wrapper">
        <header id="header" className="container">
          <div id="logo">
            <h1><a href="/">Furry Godmother</a></h1>
          </div>
          <nav id="nav">
            <ul>
              <li><a href="/">Home</a></li>
              <li>
                <a href="#">Services</a>
                <ul>
                  <li><a href="#">Grooming</a></li>
                  <li><a href="#">Cuts</a></li>
                  <li><a href="#">Spa</a></li>
                  <li><a href="#">Extras</a></li>
                </ul>
              </li>
              <li><a href="/booking">Booking</a></li>
              <li><a href="/staff">Staff</a></li>
              <li><a href="/admin">Admin</a></li>
            </ul>
          </nav>
        </header>
      </div>

      <div id="main-wrapper">
        <main>
          <Outlet /> {/* This is where your page content will render */}
        </main>
      </div>

      <div id="footer-wrapper">
        <footer id="footer" className="container">
          <div className="row">
            <div className="col-3 col-6-medium col-12-small">
              <section className="widget links">
                <h3>Random Stuff</h3>
                <ul className="style2">
                  <li><a href="#">Etiam feugiat condimentum</a></li>
                  <li><a href="#">Aliquam imperdiet suscipit odio</a></li>
                  <li><a href="#">Sed porttitor cras in erat nec</a></li>
                  <li><a href="#">Felis varius pellentesque potenti</a></li>
                  <li><a href="#">Nullam scelerisque blandit leo</a></li>
                </ul>
              </section>
            </div>
            <div className="col-3 col-6-medium col-12-small">
              <section className="widget contact last">
                <h3>Contact Us</h3>
                <ul>
                  <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                  <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                  <li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                </ul>
                <p>1234 Fictional Road<br />Nashville, TN 00000<br />(800) 555-0000</p>
              </section>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div id="copyright">
                <ul className="menu">
                  <li>&copy; Furry Godmother Pet Spa. All rights reserved</li>
                  <li>Design: <a href="http://disruptdev.netlify.app">DisruptDev</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};



export default App;