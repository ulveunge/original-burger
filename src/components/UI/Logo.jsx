import React from "react";
import logo from "../../assets/original-logo.png";
import logoWhite from "../../assets/original-logo-white.png";

function Logo(props) {
  return (
    <img
      src={props.color === "white" ? logoWhite : logo}
      width={props.width}
      height={props.height}
      alt="logo"
    ></img>
  );
}

export default Logo;
