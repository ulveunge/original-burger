import React from "react";
// import Container from "../Layout/Container";
import MenuTitle from "./MenuTitle";

import "./MenuContainer.scss";

function MenuContainer(props) {
  return (
    <div className="menu-container">
      <div className="menu-container__body">
        <MenuTitle
          titleImg={props.titleImg}
          width={props.width}
          height={props.height}
          alt={props.alt}
          titleText={props.titleText}
        />
        {props.children}
      </div>
    </div>
  );
}

export default MenuContainer;
