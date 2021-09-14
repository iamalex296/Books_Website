import React from "react";

import styled from "styled-components";

import Template from "../../UI/Template/Template";
import { StyledNavLink } from "../../UI/Links/StyledLinks";

const StyledNavListLink = styled(StyledNavLink)`
  :hover {
    border-bottom: 2px solid #cb0e4e;
    padding: 0px 0px 10px 0px;
  }
`;

const CategoriesList = ({ toggleDarkMode }) => {
  return (
    <Template background={toggleDarkMode ? "#161617" : "transparent"}>
      <ul>
        <StyledNavListLink to="/sports">Sports</StyledNavListLink>
        <StyledNavListLink to="/education">Education</StyledNavListLink>
        <StyledNavListLink to="/fiction">Fiction</StyledNavListLink>
        <StyledNavListLink to="/culture">Culture</StyledNavListLink>
        <StyledNavListLink to="/business">Business</StyledNavListLink>
        <StyledNavListLink to="/religion">Religion</StyledNavListLink>
        <StyledNavListLink to="/sale" style={{ color: "#CB0E4E" }}>
          Sale
        </StyledNavListLink>
      </ul>
    </Template>
  );
};

export default CategoriesList;
