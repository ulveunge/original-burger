import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import Container from "./Container";

import "./Navbar.scss";
import Logo from "./Logo";
import { AiFillPhone, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Links = (props) => {
  return (
    <React.Fragment>
      <li className="links-list__link">
        <Link to="/">Αρχική</Link>
      </li>
      <li className="links-list__link">
        <Link to="/philosophy">Φιλοσοφία</Link>
      </li>
      <li className="links-list__link">
        <Link to="/menu">Μενού</Link>
      </li>
      <li className="links-list__link">
        <Link to="/diet">Διατροφή</Link>
      </li>
      {props.showLogo && (
        <li className="links-list__link nav__logo">
          <Link to="/">
            <Logo width="148" height="80" />
          </Link>
        </li>
      )}
      <li className="links-list__link">
        <Link to="/franchise">Franchise</Link>
      </li>
      <li className="links-list__link">
        <Link to="/contact-us">Επικοινωνία</Link>
      </li>
      <li className="links-list__link links-list__link--phone-number">
        <Link to="tel:2410283007">
          <AiFillPhone color="#fff" size="14" />
          <span>2410 283007</span>
        </Link>
      </li>
    </React.Fragment>
  );
};

const MobileNav = (props) => {
  const backdrop = <div className="backdrop" onClick={props.onCloseMenu}></div>;

  const mobileNavContainer = (
    <div className="mobile-nav__container">
      <div className="mobile-nav__icon-container">
        <AiOutlineClose
          size="40"
          color="#777777"
          onClick={props.onCloseMenu}
          className="mobile-nav__close-icon"
        />
      </div>

      <ul className="links-list--mobile">
        <Links />
      </ul>
    </div>
  );

  return (
    <React.Fragment>
      {ReactDOM.createPortal(backdrop, document.getElementById("root"))}
      {ReactDOM.createPortal(
        mobileNavContainer,
        document.getElementById("root")
      )}
    </React.Fragment>
  );
};

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleMenuHandler = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav className="nav">
      <Container>
        <ul className="nav__list links-list">
          <Links showLogo={true} />
        </ul>
        <div className="nav__mobile mobile-nav">
          <div className="logo mobile-nav__logo">
            <Link to="/">
              <Logo color="white" width="92.55" height="50" />
            </Link>
          </div>
          <AiOutlineMenu
            size={20}
            color="#bfbfbf"
            className="mobile-nav__open-icon"
            onClick={toggleMenuHandler}
          />
          {toggleMenu && <MobileNav onCloseMenu={toggleMenuHandler} />}
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
