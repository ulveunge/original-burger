import "./MenuContainer.scss";

import Container from "../Layout/Container";
// import Container from "../Layout/Container";
import MenuTitle from "./MenuTitle";
import React from "react";

function MenuContainer(props) {
  return (
    <Container className="menu-container">
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
    </Container>
  );
}

export default MenuContainer;
