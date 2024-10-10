/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './assets/css/main.css'; // Ensure your CSS is imported

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // Apply or remove the 'dark-mode' class for each specific wrapper
  useEffect(() => {
    const headerWrapper = document.getElementById('header-wrapper');
    const mainWrapper = document.getElementById('main-wrapper');
    const footerWrapper = document.getElementById('footer-wrapper');

    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      headerWrapper.classList.add('dark-mode');
      mainWrapper.classList.add('dark-mode');
      footerWrapper.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
      headerWrapper.classList.remove('dark-mode');
      mainWrapper.classList.remove('dark-mode');
      footerWrapper.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <div id="page-wrapper">
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <div id="main-wrapper">
        <main>
          <Outlet /> {/* Render appropriate page */}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
