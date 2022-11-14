import React from 'react';
import logo from '../../images/logo-black.png';
const Header = () => {
  return (
    <header className="bg-light mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
      <img
            src={logo}
            className="logo"
            style={{ width: "10%" }}
            alt="logopic"
          /><h1 className='logo'>Deepen</h1>
      </div>
    </header>
  );
};

export default Header;
