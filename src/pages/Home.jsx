import React from "react";
import Header from "../components/Layout/Header";
import HomeHeaderContent from "../components/Home/HomeHeaderContent";
import Section from "../components/Layout/Section";
import AboutSectionContent from "../components/Home/AboutSectionContent";

import aboutBg from "../assets/h3-rev-bckgrnd-ing.jpg";

function Home() {
  return (
    <React.Fragment>
      <Header className="home-header">
        <HomeHeaderContent />
      </Header>
      <Section bg={aboutBg} padding="9em" className="about-section">
        <AboutSectionContent />
      </Section>
    </React.Fragment>
  );
}

export default Home;
