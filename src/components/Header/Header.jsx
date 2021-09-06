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
  border-bottom: 1px solid #b4b4b4;
  width: 100%;
  background: #27292d;
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
  list-style: none;
  padding: 0px;
  margin-right: 30px;
  font-size: 12px;
  cursor: pointer;
  color: ${(props) => (props.toggleDarkMode ? "#ffffff" : "#707070")};
  transition-duration: 0.3s;

  :hover,
  :active {
    color: #2e99fb;
  }
`;

const StyledLoginMenu = styled.div`
  display: flex;
  align-items: center;
`;

const StyledRegisterLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

const StyledLink = styled(Link)`
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => (props.toggleDarkMode ? "#ffffff" : "#707070")};
`;

const Header = ({ toggleDarkMode, setToggleDarkMode }) => {
  return (
    <StyledHeader>
      <Template toggleDarkMode={toggleDarkMode}>
        <StyledNavItems>
          <StyledLink toggleDarkMode={toggleDarkMode} to="/">
            <StyledNavItemsLink toggleDarkMode={toggleDarkMode}>
              Events
            </StyledNavItemsLink>
          </StyledLink>
          <StyledLink to="/">
            <StyledNavItemsLink toggleDarkMode={toggleDarkMode} to="/">
              Blog
            </StyledNavItemsLink>
          </StyledLink>
          <StyledNavItemsLink toggleDarkMode={toggleDarkMode} to="/">
            Gift Card
          </StyledNavItemsLink>
          <StyledNavItemsLink toggleDarkMode={toggleDarkMode} to="/">
            Orphan's Book club
          </StyledNavItemsLink>
          <StyledNavItemsLink toggleDarkMode={toggleDarkMode} to="/">
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
            <StyledLink toggleDarkMode={toggleDarkMode} to="/login">
              Log In
            </StyledLink>
          </Button>

          <Button>
            <StyledRegisterLink to="/register">Register</StyledRegisterLink>
          </Button>
        </StyledLoginMenu>
      </Template>
    </StyledHeader>
  );
};

export default Header;
