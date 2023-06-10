import "./MenuItem.scss";

import React, { useState } from "react";

import ReactDOM from "react-dom";
import { TfiClose } from "react-icons/tfi";

const MenuItemOpened = (props) => {
  const menuItemOpenedContent = (
    <div className="menu-item-opened">
      <TfiClose
        onClick={props.onClose}
        size="40"
        color="#000"
        className="menu-item-opened__close-btn"
      />
      <div>
        <img
          src={props.src}
          width={props.width}
          height={props.height}
          alt={props.alt}
        ></img>
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    menuItemOpenedContent,
    document.getElementById("root")
  );
};

function MenuItem(props) {
  const [openedItem, setOpenedItem] = useState(null);

  console.log(openedItem);

  const openItemHandler = (e) => {
    document.querySelector("body").style.overflowY = "hidden";

    setOpenedItem(() => {
      return {
        src: e.target.getAttribute("src"),
        width: e.target.getAttribute("width"),
        height: e.target.getAttribute("height"),
        alt: e.target.getAttribute("alt"),
      };
    });
  };

  const closeItemHandler = () => {
    setOpenedItem(null);
    document.querySelector("body").style.overflowY = "auto";
  };

  const pricesContent = props.item.prices ? (
    <table className="menu-item__prices">
      <tbody>
        {props.item.prices.map((el) => {
          return (
            <tr key={el[0]} className="menu-item__size-option">
              <td>
                {typeof el[0] === "string" ? el[0] : "€" + el[0].toFixed(2)}
              </td>
              <td>
                {" "}
                {typeof el[1] === "string" ? el[1] : "€" + el[1].toFixed(2)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  ) : null;

  return (
    <React.Fragment>
      {openedItem && (
        <MenuItemOpened
          src={openedItem.src}
          width={openedItem.width}
          height={openedItem.height}
          alt={openedItem.alt}
          onClose={closeItemHandler}
        />
      )}
      <li className="menu-list__item menu-item">
        <div className="menu-item__wrapper">
          <div className="menu-item__body">
            <div className="menu-item__image">
              <img
                onClick={openItemHandler}
                src={props.item.img.src}
                alt={props.item.img.alt}
                width={props.item.img.width}
                height={props.item.img.height}
              ></img>
            </div>
            <h3 className="menu-item__title">{props.item.title}</h3>
            {props.item.price && (
              <span className="menu-item__price">{props.item.price}</span>
            )}
            {pricesContent}
            <div className="menu-item__ingredients">
              <span>
                {props.item.ingredients.slice(0, 3).join(", ")}
                <br />
                {props.item.ingredients.slice(3).join(", ")}
              </span>
            </div>
          </div>
        </div>
      </li>
    </React.Fragment>
  );
}

export default MenuItem;
