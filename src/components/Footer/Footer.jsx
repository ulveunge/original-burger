import "./Footer.scss";

import Container from "../Layout/Container";
import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__wrapper">
          <p>
            © 2022 Originalburger. Designed by
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.phoenixda.com/"
            >
              <span className="phoenix-link-text"> Phoenix Digital Agency</span>
            </a>
            . All Rights Reserved.
          </p>
          <p>
            <a href="#0">Πολιτική Απορρήτου</a> |{" "}
            <a href="#0">Πολιτική Cookies</a>
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
