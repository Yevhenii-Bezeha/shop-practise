import React from "react";
import { SectionContainer } from "./SectionStyled";

const Section = ({ children, title: myTitle, isMobiles }) => {
  return (
    <SectionContainer>
      <h2 className="sectionTitle">{myTitle.toUpperCase()}</h2>
      {children}
    </SectionContainer>
  );
};

export default Section;

Section.defaultProps = {
  isMobiles: false,
};
