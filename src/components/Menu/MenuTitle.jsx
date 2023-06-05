import React from "react";

import "./MenuTitle.scss";

function MenuTitle(props) {
  return (
    <h3 className="menu-container__title">
      <div className="menu-container__title-image">
        <div className="divider divider--left"></div>
        <div className="menu-container__title-text-image">
          <img
            src={props.titleImg}
            width={props.width}
            height={props.height}
            alt={props.alt}
          />
          {props.titleText && (
            <span className="menu-container__title-text">
              {props.titleText}
            </span>
          )}
        </div>
        <div className="divider divider--right"></div>
      </div>
    </h3>
  );
}

export default MenuTitle;
