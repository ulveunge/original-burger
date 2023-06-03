import React from "react";

import Container from "./Container";

import mainBg from "../assets/white-concrete-wall_53876-92803.webp";
import textBg from "../assets/original78.png";
import hotPriceBg from "../assets/33.png";

import colaGlass from "../assets/4-2-coca-cola-picture.png";
import colaCan from "../assets/coca-cola.png";
import potatoes from "../assets/imgbin_potato-wedges-home-fries-french-fries-patatas-bravas-lyonnaise-potatoes-png-1.png";
import burgers from "../assets/origi.png";
import line from "../assets/22.png";

import "./HomeHeaderContent.scss";

function HomeHeaderContent() {
  const topBackgroundStyles = {
    height: "50.14em",
    background: `url('${textBg}') no-repeat center top 14.7rem, url('${mainBg}') center no-repeat`,
    backgroundSize: "contain, cover",
  };

  const bottomBackgroundStyles = {
    height: "28.6em",
    backgroundColor: `#222222`,
  };

  const hotPriceBackgroundStyles = {
    background: `url('${hotPriceBg}') no-repeat`,
    backgroundSize: "100% 100%",
  };

  return (
    <React.Fragment>
      <div style={topBackgroundStyles}></div>
      <Container>
        <div className="home-header__content-wrapper">
          <div className="home-header__food-images">
            <div className="home-header__cola-glass shake">
              <img
                src={colaGlass}
                alt="glass of cola"
                width="1024"
                height="1428"
              />
            </div>
            <div className="home-header__cola-can">
              <img src={colaCan} alt="can of cola" width="233" height="500" />
            </div>
            <div className="home-header__potatoes">
              <img src={potatoes} alt="potatoes" width="640" height="405" />
            </div>
            <div className="home-header__burgers">
              <img src={burgers} alt="burgers" width="2101" height="1541" />
            </div>
            <div className="home-header__line">
              <img src={line} alt="line" width="800" height="650" />
            </div>
            <span className="home-header__images-text scale-up-center">
              Hot Deals
            </span>
          </div>
          <div className="home-header__text-content">
            <h1>
              2 Original Burger XL
              <br />
              Country πατάτες
              <br />2 coca cola 330ml
            </h1>
            <div className="hot-price" style={hotPriceBackgroundStyles}>
              <span className="hot-price__text">
                Hot <br /> Price
              </span>
              <span className="hot-price__price">€13.00</span>
            </div>
          </div>
        </div>
      </Container>
      <div style={bottomBackgroundStyles}></div>
    </React.Fragment>
  );
}

export default HomeHeaderContent;
