import AboutSectionContent from "../components/Home/AboutSectionContent";
import Header from "../components/Layout/Header";
import HomeHeaderContent from "../components/Home/HomeHeaderContent";
import MenuContainer from "../components/Menu/MenuContainer";
import MenuList from "../components/Menu/MenuList";
import React from "react";
import Section from "../components/Layout/Section";
import { YOUR_TOP_CHOICE } from "../config";
import aboutBg from "../assets/h3-rev-bckgrnd-ing.jpg";
import menuListTitleImg from "../assets/yourtopchoice.png";
import whiteMenuBg from "../assets/bg10.jpg";

function Home() {
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
          <MenuList items={YOUR_TOP_CHOICE}/>
        </MenuContainer>
      </Section>
    </React.Fragment>
  );
}

export default Home;
