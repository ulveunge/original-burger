import "./MenuItem.scss";

import React from "react";

function MenuItem(props) {
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
    <li className="menu-list__item menu-item">
      <div className="menu-item__wrapper">
        <div className="menu-item__body">
          <div className="menu-item__image">
            <img
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
  );
}

export default MenuItem;
