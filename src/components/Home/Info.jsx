import "./Info.scss";

import Container from "../Layout/Container";
import { Link } from "react-router-dom";
import React from "react";
import Title from "../UI/Title";
import franchiseBg from "../../assets/burger4.jpg";
import infoContentBg from "../../assets/h3-rev-bckgrnd-ing.jpg";
import nutritionFactsBg from "../../assets/nutritionfacts.jpg";

const InfoItem = (props) => {
  const bg = {
    background: `url(${props.imageSrc}) no-repeat center`,
    backgroundSize: "cover",
  };

  return (
    <div
      style={bg}
      className={`info-section__item ${props.className ? props.className : ""}`}
    >
      {props.children}
    </div>
  );
};

function Info() {
  return (
    <Container className="info-section__container">
      <div className="info-section__wrapper">
        <InfoItem
          className="info-section__image info-section--nutrition-image"
          imageSrc={nutritionFactsBg}
        />
        <InfoItem
          imageSrc={infoContentBg}
          className="info-section--nutrition-content"
        >
          <div className="info-section__content">
            <h3 className="info-section__title">
              <Title>Nutrition Facts</Title>
              <br />
              Διατροφική αξία
            </h3>
            <div className="info-section__text">
              <p>
                Η διαιτολόγος «Στέλλα Μορφογιάννη» δίνει χρήσιμες συμβουλές
                <br />
                για τη διατροφική αξία των προϊόντων του Original Burger.
              </p>
            </div>
            <Link to="/diet" className="info-section__btn">
              <span>Διατροφή</span>
            </Link>
          </div>
        </InfoItem>
        <InfoItem
          imageSrc={infoContentBg}
          className="info-section--franchise-content"
        >
          <div className="info-section__content">
            <h3 className="info-section__title">
              <span>Franchise</span>
              <br />
              Γίνε συνεργάτης μας
            </h3>
            <div className="info-section__text">
              <p>
                Κάντε τη διαφορά στο χώρο των έτοιμων γευμάτων, αρπάξτε την
                ευκαιρία και γίνετε μέλος
                <br />
                της ομάδας μας, αποκτώντας το δικό σας ORIGINAL BURGER.
              </p>
            </div>
            <Link to="/diet" className="info-section__btn">
              <span>Franchise</span>
            </Link>
          </div>
        </InfoItem>
        <InfoItem
          className="info-section__image info-section--franchise-image"
          imageSrc={franchiseBg}
        />
      </div>
    </Container>
  );
}

export default Info;
