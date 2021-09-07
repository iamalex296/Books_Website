import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

import Button from "../../UI/Button/Button";
import Template from "../../UI/Template/Template";
import SwitchToggler from "../../UI/SwitchToggler/SwitchToggler";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  border-bottom: 1px solid rgba(180, 180, 180, 0.3);
  width: 100%;
  z-index: 100;
`;

const StyledNavItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
`;

const StyledNavItemsLink = styled.li`
  text-transform: uppercase;
  text-decoration: none;
  list-style: none;
  padding: 0px;
  margin-right: 30px;
  font-size: 12px;
  cursor: pointer;
  transition-duration: 0.3s;

  :hover,
  :active {
    color: #2e99fb;
  }
`;

const StyledRegisterLink = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  list-style: none;
  padding: 0px;
  font-size: 12px;
  cursor: pointer;
`;

const StyledLoginMenu = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  text-decoration: none;
  color: #dfdfdf;
`;

const Header = ({ toggleDarkMode, setToggleDarkMode }) => {
  return (
    <StyledHeader>
      <Template>
        <StyledNavItems>
          <StyledLink to="/">
            <StyledNavItemsLink>Events</StyledNavItemsLink>
          </StyledLink>
          <StyledLink to="/">
            <StyledNavItemsLink to="/">Blog</StyledNavItemsLink>
          </StyledLink>
          <StyledNavItemsLink to="/">Gift Card</StyledNavItemsLink>
          <StyledNavItemsLink to="/">Orphan's Book club</StyledNavItemsLink>
          <StyledNavItemsLink to="/">
            <Button size="small">QUIZ</Button>
          </StyledNavItemsLink>
        </StyledNavItems>

        <StyledLoginMenu>
          <SwitchToggler
            toggleDarkMode={toggleDarkMode}
            setToggleDarkMode={setToggleDarkMode}
          />

          <Button
            variant="outlined"
            color="secondary"
            size="large"
            style={{ marginRight: "10px" }}
          >
            <StyledLink to="/login">Log In</StyledLink>
          </Button>

          <StyledRegisterLink to="/register">
            <Button>Register</Button>
          </StyledRegisterLink>
        </StyledLoginMenu>
      </Template>
    </StyledHeader>
  );
};

export default Header;
