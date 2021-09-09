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
        <StyledNavListLink to="/newbooks">New</StyledNavListLink>
        <StyledNavListLink to="/bestsellers">Bestsellers</StyledNavListLink>
        <StyledNavListLink to="/fiction">Fiction</StyledNavListLink>
        <StyledNavListLink to="/">Children's</StyledNavListLink>
        <StyledNavListLink to="/history">History</StyledNavListLink>
        <StyledNavListLink to="/philosophy">Philosophy</StyledNavListLink>
        <StyledNavListLink to="/romance">Romance</StyledNavListLink>
        <StyledNavListLink to="/adventure">Adventure</StyledNavListLink>
        <StyledNavListLink to="/horror">Horror</StyledNavListLink>
        <StyledNavListLink to="/sale" style={{ color: "#CB0E4E" }}>
          Sale
        </StyledNavListLink>
      </ul>
    </Template>
  );
};

export default CategoriesList;
