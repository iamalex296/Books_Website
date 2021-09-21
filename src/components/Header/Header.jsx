import React from "react";

import { IconButton, Menu, MenuItem } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";

import { Link } from "react-router-dom";
import styled from "styled-components";

import Button from "../../UI/Button/Button";
import Template from "../../UI/Template/Template";
import SwitchToggler from "../../UI/SwitchToggler/SwitchToggler";
import { StyledListLink } from "../../UI/Links/StyledLinks";

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

// const StyledRegisterLink = styled(Link)`
//   text-transform: uppercase;
//   text-decoration: none;
//   list-style: none;
//   padding: 0px;
//   font-size: 12px;
//   cursor: pointer;
// `;

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

const Header = ({ toggleDarkMode, setToggleDarkMode, setUserState }) => {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    localStorage.removeItem("user");
    setUserState();
    setAnchorEl(null);
  };

  const closeProfilePopup = () => {
    setAnchorEl(null);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <StyledHeader>
      <Template>
        <StyledNavItems>
          <StyledLink>
            <StyledListLink to="/">Events</StyledListLink>
          </StyledLink>
          <StyledLink>
            <StyledListLink to="/">Blog</StyledListLink>
          </StyledLink>
          <StyledListLink to="/">Gift Card</StyledListLink>
          <StyledListLink to="/">Orphan's Book club</StyledListLink>
          <StyledListLink to="/">
            <Button size="small">QUIZ</Button>
          </StyledListLink>
        </StyledNavItems>

        <StyledLoginMenu>
          <SwitchToggler
            toggleDarkMode={toggleDarkMode}
            setToggleDarkMode={setToggleDarkMode}
          />

          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle color="primary" />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={closeProfilePopup}
              >
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
          )}

          {/* 
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
          </StyledRegisterLink> */}
        </StyledLoginMenu>
      </Template>
    </StyledHeader>
  );
};

export default Header;
