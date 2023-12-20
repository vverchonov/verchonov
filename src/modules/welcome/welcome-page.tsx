import * as React from "react";
import usePageWrapper from "../../hooks/usePageWrapper";
import WelcomeBlock from "./blocks/welcome-block";
import AboutMeBlock from "./blocks/aboutme-block";

const WelcomePage = () => {
  return (
    <>
      <WelcomeBlock />
      <AboutMeBlock />
    </>
  );
};

export default WelcomePage;
