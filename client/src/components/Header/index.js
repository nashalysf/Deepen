import React from 'react';
import logo from '../../images/logo-white.png';
import burgerBtn from '../../images/burgerBtn.PNG'

const Header = () => {
  return (
    <header className=" mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
      <img
            src={logo}
            className="logo"
            style={{ width: "4%" }}
            alt="logopic"
          />
          <img
            src={burgerBtn}
            className="Burgerbtn"
            style={{ width: "3%" }}
            alt="menu button"
          />
      </div>
    </header>
  );
};

export default Header;
