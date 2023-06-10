import "./Title.scss";

import React from "react";

function Title(props) {
  return (
    <span className={`title ${props.className ? props.className : ""}`}>
      {props.children}
    </span>
  );
}

export default Title;
