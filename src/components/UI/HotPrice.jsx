import React from "react";

import hotPriceBg from "../../assets/33.png";

import "./HotPrice.scss";

function HotPrice(props) {
  const bgStyles = {
    background: `url('${hotPriceBg}') no-repeat`,
    backgroundSize: "100% 100%",
  };

  return (
    <div className={`hot-price ${props.className}`} style={bgStyles}>
      <span className="hot-price__text">
        Hot <br /> Price
      </span>
      <span className="hot-price__price">€13.00</span>
    </div>
  );
}

export default HotPrice;
