import "./AboutSectionContent.scss";

import { BsArrowRightCircle } from "react-icons/bs";
import Container from "../Layout/Container";
import { Link } from "react-router-dom";
import React from "react";
import Title from "../UI/Title";
import img from "../../assets/burger3.png";

function AboutSectionContent() {
  return (
    <Container>
      <div className="about-section__wrapper">
        <div className="about-section__image">
          <img src={img} alt="Burger and fries" width="800" height="595" />
        </div>
        <div className="about-section__content">
          <h3 className="about-section__title">
            <Title>We love burgers</Title>
            <br />
            <span>Πλούσιες</span> γευστικές προτάσεις με επίκεντρο τα{" "}
            <span>Burgers</span>.
          </h3>
          <div className="about-section__text">
            <p>
              Στα ORIGINAL BURGER θα βρείτε πλούσιες γευστικές προτάσεις με
              επίκεντρο τα burgers. Άνθρωποι με μεράκι εργάζονται καθημερινά για
              να προσφέρουν μια ξεχωριστή γευστική εμπειρία εστιάζοντας πάντα
              στην ποιότητα των προϊόντων, με μόνο στόχο την πλήρη εξυπηρέτηση
              και ικανοποίηση του εκάστοτε πελάτη.
            </p>
          </div>
          <Link className="about-section__btn" to="/philosophy">
            <BsArrowRightCircle size="17" color="#fff" /> Η ΦΙΛΟΣΟΦΙΑ ΜΑΣ
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default AboutSectionContent;
