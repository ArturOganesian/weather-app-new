import React from "react";
import "components/header/header.scss";
import logo from "images/vector/default-monochrome-white.svg";

const Header = () => {
  return (
    <section className="header_container">
      <img src={logo} alt="logo" />
      <h2>Weather App</h2>
    </section>
  );
};

export default Header;
