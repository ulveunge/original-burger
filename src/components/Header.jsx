import React from "react";

import "./Header.scss";
import mainBg from "../assets/white-concrete-wall_53876-92803.webp";
import textBg from "../assets/original78.png";

function Header() {
  const topBackgroundStyles = {
    height: "50.14rem",
    background: `url('${textBg}') no-repeat center bottom -80px, url('${mainBg}') center no-repeat, #222222`,
  };

  const bottomBackgroundStyles = {
    height: "28.6rem",
    backgroundColor: `#222222`,
  };

  return (
    <header className="header">
      <div style={topBackgroundStyles}></div>
      <div style={bottomBackgroundStyles}></div>
    </header>
  );
}

export default Header;
