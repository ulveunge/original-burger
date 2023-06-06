import "./HomeHeaderContent.scss";

import Container from "../Layout/Container";
import HotPrice from "../UI/HotPrice";
import React from "react";
import burgers from "../../assets/origi.png";
import colaCan from "../../assets/coca-cola.png";
import colaGlass from "../../assets/4-2-coca-cola-picture.png";
import line from "../../assets/22.png";
import mainBg from "../../assets/white-concrete-wall_53876-92803.webp";
import potatoes from "../../assets/imgbin_potato-wedges-home-fries-french-fries-patatas-bravas-lyonnaise-potatoes-png-1.png";
import textBg from "../../assets/original78.png";

const TopBg = () => {
  const styles = {
    height: "50.14em",
    background: `url('${textBg}') no-repeat center top 14.7rem, url('${mainBg}') center no-repeat`,
    backgroundSize: "contain, cover",
  };

  return <div style={styles}></div>;
};

const BottomBg = () => {
  const styles = {
    height: "28.6em",
    backgroundColor: `#222222`,
  };

  return <div style={styles}></div>;
};

function HomeHeaderContent() {
  return (
    <React.Fragment>
      <TopBg />
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
            <h2>
              2 Original Burger XL
              <br />
              Country πατάτες
              <br />2 coca cola 330ml
            </h2>
            <HotPrice className="home-header__hot-price" />
          </div>
        </div>
      </Container>
      <BottomBg />
    </React.Fragment>
  );
}

export default HomeHeaderContent;
