import React from "react";
import LoGo from "../../assets/amazon.png";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <img className="header__logo" src={LoGo} alt="" />
      <h1>Capsotne amazon clone</h1>
    </header>
  );
};

export default Header;
