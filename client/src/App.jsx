/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'


//Global header and footer

const App = () => {
  return (

    <div id="page-wrapper">
      <Header />

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