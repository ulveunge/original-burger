import "./Contacts.scss";

import { FaFacebookF, FaInstagram } from "react-icons/fa";

import { BsTelephone } from "react-icons/bs";
import Container from "../Layout/Container";
import Logo from "../UI/Logo";
import React from "react";

function Contacts() {
  return (
    <Container>
      <div className="contacts-section__wrapper">
        <div className="contacts-section__phone-number">
          <span className="contacts-section__phone-icon">
            <BsTelephone size="25" color="#fff" />
          </span>
          <span>2410 283007</span>
          <span>ΚΑΛΕΣΕ ΓΙΑ ΠΑΡΑΓΓΕΛΙΑ</span>
        </div>
        <div className="contacts-section__logo">
          <Logo width="385" height="208" />
        </div>
        <div className="contacts-section__social">
          <span>FOLLOW US</span>
          <span>CONNECT & SHARE</span>
          <ul className="contacts-section__social-list">
            <li className="contacts-section__social-item">
              <a href="https://www.facebook.com/original.burgers">
                <span>
                  <FaFacebookF size="16" color="#fff" className="social-icon" />
                </span>
              </a>
            </li>
            <li className="contacts-section__social-item">
              <a href="https://www.instagram.com/originalburgergr/">
                <span>
                  <FaInstagram size="16" color="#fff" className="social-icon" />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default Contacts;
