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
        <StyledNavListLink to="/">New</StyledNavListLink>
        <StyledNavListLink to="/">Bestsellers</StyledNavListLink>
        <StyledNavListLink to="/">Fiction</StyledNavListLink>
        <StyledNavListLink to="/">Children's</StyledNavListLink>
        <StyledNavListLink to="/">History</StyledNavListLink>
        <StyledNavListLink to="/">Philosophy</StyledNavListLink>
        <StyledNavListLink to="/">Romance</StyledNavListLink>
        <StyledNavListLink to="/">Adventure</StyledNavListLink>
        <StyledNavListLink to="/">Horror</StyledNavListLink>
        <StyledNavListLink to="/" style={{ color: "#CB0E4E" }}>
          Sale
        </StyledNavListLink>
      </ul>
    </Template>
  );
};

export default CategoriesList;
