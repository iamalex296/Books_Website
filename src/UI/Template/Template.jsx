import React from "react";

import styled from "styled-components";

const StyledTemplateOutsideContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: #27292d;
  color: #ffffff; */
  width: 100%;
`;
const StyledTemplateInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  flex-wrap: wrap;
  width: 75%;
  /* background-color: #27292d;
  color: #ffffff !important; */
  padding: 10px;

  @media (max-width: 1700px) and (min-width: 1530px) {
    width: 75%;
  }

  @media (max-width: 1530px) and (min-width: 1280px) {
    width: 80%;
  }

  @media (max-width: 1280px) and (min-width: 1024px) {
    width: 85%;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const Template = ({ children, inlineStyles, alignItems }) => {
  return (
    <StyledTemplateOutsideContainer>
      <StyledTemplateInnerContainer
        style={inlineStyles}
        alignItems={alignItems}
      >
        {children}
      </StyledTemplateInnerContainer>
    </StyledTemplateOutsideContainer>
  );
};

export default Template;
