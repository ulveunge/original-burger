import React, { useContext } from "react";

import AboutSectionContent from "../components/Home/AboutSectionContent";
import BackToTopButton from "../components/UI/BackToTopButton";
import Contacts from "../components/Footer/Contacts";
import Footer from "../components/Footer/Footer";
import Header from "../components/Layout/Header";
import HeaderIntersectionContext from "../store/header-intersection-context";
import HomeHeaderContent from "../components/Home/HomeHeaderContent";
import Info from "../components/Home/Info";
import MenuContainer from "../components/Menu/MenuContainer";
import MenuList from "../components/Menu/MenuList";
import Section from "../components/Layout/Section";
import { YOUR_TOP_CHOICE } from "../data";
import aboutBg from "../assets/h3-rev-bckgrnd-ing.jpg";
import contactsBg from "../assets/bg-white.jpg";
import menuListTitleImg from "../assets/yourtopchoice.png";
import whiteMenuBg from "../assets/bg10.jpg";

function Home() {
  const headerIntersectionCtx = useContext(HeaderIntersectionContext);

  return (
    <React.Fragment>
      <Header className="home-header">
        <HomeHeaderContent />
      </Header>
      <Section bg={aboutBg} mode="dark" padding="9em" className="about-section">
        <AboutSectionContent />
      </Section>
      <Section
        bg={whiteMenuBg}
        mode="light"
        padding="6em"
        className="top-choice-section"
      >
        <MenuContainer
          titleImg={menuListTitleImg}
          width="288"
          height="40"
          alt="Your Top Choice"
          titleText="δημοφιλέστερα burgers"
        >
          <MenuList items={YOUR_TOP_CHOICE} />
        </MenuContainer>
      </Section>
      <Section mode="dark" className="info-section">
        <Info />
      </Section>
      <Section
        bg={contactsBg}
        mode="light"
        padding="6em"
        className="contacts-section"
      >
        <Contacts />
      </Section>
      <Footer />
      {!headerIntersectionCtx.isIntersecting && <BackToTopButton />}
    </React.Fragment>
  );
}

export default Home;
