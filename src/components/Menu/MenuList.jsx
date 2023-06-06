import "./MenuList.scss";

import MenuItem from "./MenuItem";
import React from "react";

function MenuList(props) {
  return (
    <ul className="menu-list section-padding">
      {props.items.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default MenuList;
